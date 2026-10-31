import os
from flask import Blueprint, request, jsonify
from supabase import create_client, Client

# Donor Blueprint – placeholder implementations

donor_bp = Blueprint('donor', __name__)

# Initialise Supabase client (service role)
supabase_url = os.getenv('SUPABASE_URL')
supabase_key = os.getenv('SUPABASE_SERVICE_ROLE_KEY')
supabase: Client = create_client(supabase_url, supabase_key) if supabase_url and supabase_key else None

@donor_bp.route('/profile', methods=['GET'])
def get_profile():
    """Return the donor profile for the authenticated user.
    In a real app, we would verify JWT and query the donors table with RLS.
    Here we just return a placeholder JSON.
    """
    # TODO: extract user_id from JWT (handled by auth middleware)
    return jsonify({
        'id': 'anon-donor-id',
        'name': 'John Doe',
        'blood_group': 'A+',
        'city': 'Sample City',
        'availability': True,
    })

@donor_bp.route('/search', methods=['GET'])
def search_donors():
    """Search donors based on query parameters.
    Expected query params: bloodGroup, city, component, radiusKm
    Returns a list of anonymized donor records.
    """
    params = request.args
    # In a real implementation we would build a SQL query with filters and RLS.
    # Here we return a static list for demo purposes.
    sample = [
        {'id': 'donor-001', 'blood_group': params.get('bloodGroup', 'A+'), 'city': params.get('city', 'Sample City'), 'distance_km': 2},
        {'id': 'donor-002', 'blood_group': params.get('bloodGroup', 'A+'), 'city': params.get('city', 'Sample City'), 'distance_km': 5},
    ]
    return jsonify(sample)

