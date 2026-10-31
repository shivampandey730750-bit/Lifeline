/**
 * bloodGroups.js
 * 
 * Blood group definitions and ABO/Rh compatibility reference table.
 * 
 * ⚠️ MEDICAL DISCLAIMER:
 * This compatibility table is for informational and educational purposes only.
 * Blood-group matching shown here is NOT a transfusion-compatibility guarantee.
 * Actual transfusion compatibility requires comprehensive testing by qualified
 * medical professionals including crossmatch, antibody screening, and other checks.
 * Never use this table to declare anyone medically eligible to donate or receive blood.
 * Always consult a licensed medical professional and follow official blood bank procedures.
 * 
 * Reference: Standard ABO/Rh compatibility — see WHO Blood Transfusion Safety guidelines.
 */

export const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

/**
 * ABO/Rh compatibility table.
 * canDonateTo[donor] = array of recipient types (for REFERENCE ONLY, not clinical use).
 * Source: Standard ABO/Rh compatibility reference — not for clinical transfusion decisions.
 */
export const COMPATIBILITY = {
  // Key: donor blood group → Value: compatible recipient types (whole blood, simplified)
  'O-':  ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  'O+':  ['A+', 'B+', 'AB+', 'O+'],
  'A-':  ['A+', 'A-', 'AB+', 'AB-'],
  'A+':  ['A+', 'AB+'],
  'B-':  ['B+', 'B-', 'AB+', 'AB-'],
  'B+':  ['B+', 'AB+'],
  'AB-': ['AB+', 'AB-'],
  'AB+': ['AB+'],
}

/**
 * Get compatible donor blood groups for a given recipient.
 * Returns blood groups that COULD (in simplified ABO/Rh terms) donate to the recipient.
 * 
 * ⚠️ For reference only — not a transfusion compatibility guarantee.
 */
export function getCompatibleDonors(recipientGroup) {
  return BLOOD_GROUPS.filter(donor =>
    COMPATIBILITY[donor]?.includes(recipientGroup)
  )
}

/**
 * Check if a donor group is compatible with a recipient group (simplified ABO/Rh).
 * ⚠️ For reference only — not a transfusion compatibility guarantee.
 */
export function isCompatible(donorGroup, recipientGroup) {
  return COMPATIBILITY[donorGroup]?.includes(recipientGroup) ?? false
}

/** Blood group display colors (for UI chips) */
export const BLOOD_GROUP_COLORS = {
  'A+':  { bg: 'bg-red-50   dark:bg-red-950',  text: 'text-red-700   dark:text-red-300',  border: 'border-red-200   dark:border-red-800' },
  'A-':  { bg: 'bg-rose-50  dark:bg-rose-950', text: 'text-rose-700  dark:text-rose-300', border: 'border-rose-200  dark:border-rose-800' },
  'B+':  { bg: 'bg-blue-50  dark:bg-blue-950', text: 'text-blue-700  dark:text-blue-300', border: 'border-blue-200  dark:border-blue-800' },
  'B-':  { bg: 'bg-indigo-50 dark:bg-indigo-950', text: 'text-indigo-700 dark:text-indigo-300', border: 'border-indigo-200 dark:border-indigo-800' },
  'AB+': { bg: 'bg-purple-50 dark:bg-purple-950', text: 'text-purple-700 dark:text-purple-300', border: 'border-purple-200 dark:border-purple-800' },
  'AB-': { bg: 'bg-violet-50 dark:bg-violet-950', text: 'text-violet-700 dark:text-violet-300', border: 'border-violet-200 dark:border-violet-800' },
  'O+':  { bg: 'bg-amber-50 dark:bg-amber-950', text: 'text-amber-700 dark:text-amber-300', border: 'border-amber-200 dark:border-amber-800' },
  'O-':  { bg: 'bg-orange-50 dark:bg-orange-950', text: 'text-orange-700 dark:text-orange-300', border: 'border-orange-200 dark:border-orange-800' },
}

export const BLOOD_COMPONENTS = [
  { value: 'whole_blood',  label: 'Whole Blood' },
  { value: 'packed_rbc',   label: 'Packed RBC' },
  { value: 'platelets',    label: 'Platelets' },
  { value: 'plasma',       label: 'Fresh Frozen Plasma (FFP)' },
  { value: 'cryoprecipitate', label: 'Cryoprecipitate' },
]
