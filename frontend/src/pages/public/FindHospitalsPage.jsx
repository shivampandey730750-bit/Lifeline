import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Badge from '@/components/ui/Badge';
import { Search, MapPin, Building2, Phone, ExternalLink, ShieldCheck, Clock } from 'lucide-react';

export default function FindHospitalsPage() {
  const [searchCity, setSearchCity] = useState('');

  const facilities = [
    {
      name: 'King George’s Medical University (KGMU) Blood Bank',
      type: 'Government Blood Bank & Tertiary Hospital',
      city: 'Lucknow',
      address: 'Shah Mina Rd, Chowk, Lucknow, Uttar Pradesh 226003',
      phone: '+91 522 225 7450',
      availability: 'Verified Facility',
      hours: '24/7 Emergency Service',
      verified: true
    },
    {
      name: 'Sanjay Gandhi Postgraduate Institute (SGPGIMS)',
      type: 'Super Specialty Hospital & Blood Bank',
      city: 'Lucknow',
      address: 'Raebareli Rd, Lucknow, Uttar Pradesh 226014',
      phone: '+91 522 266 8700',
      availability: 'Verified Facility',
      hours: '24/7 Emergency Service',
      verified: true
    },
    {
      name: 'GSVM Medical College & Associated Hospitals',
      type: 'District Blood Bank & Medical College',
      city: 'Kanpur',
      address: 'Swaroop Nagar, Kanpur, Uttar Pradesh 208002',
      phone: '+91 512 253 5483',
      availability: 'Verified Facility',
      hours: '24/7 Emergency Service',
      verified: true
    },
    {
      name: 'Regency Hospital Blood Centre',
      type: 'Private Multi-Specialty Hospital',
      city: 'Kanpur',
      address: 'A-2, Sarvodaya Nagar, Kanpur, Uttar Pradesh 208005',
      phone: '+91 512 308 1111',
      availability: 'Verified Facility',
      hours: '24/7 Emergency Service',
      verified: true
    },
    {
      name: 'Motilal Nehru Medical College (MLNMC)',
      type: 'Government Blood Bank',
      city: 'Prayagraj',
      address: 'Lowther Rd, George Town, Prayagraj, Uttar Pradesh 211001',
      phone: '+91 532 225 6152',
      availability: 'Verified Facility',
      hours: '24/7 Emergency Service',
      verified: true
    }
  ];

  const filtered = facilities.filter(f => 
    searchCity ? f.city.toLowerCase().includes(searchCity.toLowerCase()) || f.name.toLowerCase().includes(searchCity.toLowerCase()) : true
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Find Hospitals & Blood Banks
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Locate certified healthcare facilities and regional blood storage centres.
        </p>
      </div>

      {/* Mandatory Non-Negotiable Availability Disclaimer */}
      <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        ℹ️ <b>Live Stock Notice:</b> Availability not connected — please contact the blood bank directly. All listings are verified partner health centers.
      </div>

      {/* Filter Bar */}
      <Card className="p-4 flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search by hospital name or city (e.g. Lucknow, Kanpur, Prayagraj)..."
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          startIcon={<Search className="w-4 h-4 text-slate-400" />}
          className="flex-1"
        />
        <Button onClick={() => setSearchCity('')} variant="secondary">
          Reset Filter
        </Button>
      </Card>

      {/* Facilities List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item, idx) => (
          <Card key={idx} className="p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-crimson-600 shrink-0" />
                    <h3 className="font-bold text-base text-slate-900 dark:text-white leading-tight">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{item.type}</p>
                </div>
                <Badge variant="success" className="shrink-0 text-[10px] gap-1">
                  <ShieldCheck className="w-3 h-3" /> Verified
                </Badge>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pt-2">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{item.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{item.hours}</span>
                </p>
                <p className="flex items-center gap-2 font-medium text-slate-900 dark:text-white">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span>{item.phone}</span>
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex gap-3">
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name + ' ' + item.city)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="secondary" size="sm" className="w-full gap-2 text-xs">
                  <ExternalLink className="w-3.5 h-3.5" /> Get Directions
                </Button>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
