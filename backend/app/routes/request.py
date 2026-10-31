import os
from flask import Blueprint, request, jsonify
from supabase import create_client, Client

request_bp = Blueprint('request', __name__)

# Supabase client (service role)
supabase_url = os.getenv('SUPABASE_URL')
supabase_key = os.getenv('SUPABASE_SERVICE_ROLE_KEY')
supabase: Client = (
    create_client(supabase_url, supabase_key)
    if supabase_url and supabase_key
    else None
)

@request_bp.route('/create', methods=['POST'])
def create_request():
    """Create a new blood request."""
    data = request.get_json() or {}
    dummy_id = "req-" + os.urandom(4).hex()
    return jsonify({
        "message": "Emergency request submitted successfully",
        "request_id": dummy_id,
        "status": "Pending",
        "data": data
    }), 201

@request_bp.route('/my', methods=['GET'])
def my_requests():
    """Return requests for current user (demo data)."""
    sample = [
        {"id": "req-001", "blood_group": "A+", "component": "Whole Blood", "units": 2, "hospital": "City Hospital", "urgency": "Critical", "status": "Pending"},
        {"id": "req-002", "blood_group": "O-", "component": "Packed RBC", "units": 1, "hospital": "Metro Clinic", "urgency": "Urgent", "status": "Fulfilled"}
    ]
    return jsonify(sample), 200

@request_bp.route('/<req_id>', methods=['GET'])
def request_detail(req_id: str):
    """Return single request detail."""
    dummy = {
        "id": req_id,
        "blood_group": "A+",
        "component": "Whole Blood",
        "units": 2,
        "hospital": "City Hospital",
        "city": "Sample City",
        "urgency": "Critical",
        "status": "Pending",
        "notes": "Urgent requirement for operation"
    }
    return jsonify(dummy), 200

