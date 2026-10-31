import os
from flask import Blueprint, request, jsonify
from supabase import create_client, Client

auth_bp = Blueprint('auth', __name__)

# Initialise Supabase client (service role) – uses env vars set in Config
supabase_url = os.getenv('SUPABASE_URL')
supabase_key = os.getenv('SUPABASE_SERVICE_ROLE_KEY')
supabase: Client = create_client(supabase_url, supabase_key) if supabase_url and supabase_key else None

@auth_bp.route('/signup', methods=['POST'])
def signup():
    """Create a new user using Supabase Auth.
    Expected JSON: { email, password, role ('donor'|'requester'|'admin') }
    Returns a JWT token for client‑side usage.
    """
    data = request.get_json() or {}
    email = data.get('email')
    password = data.get('password')
    role = data.get('role', 'requester')
    if not email or not password:
        return jsonify({'error': 'email and password required'}), 400
    # Supabase Auth sign‑up (client‑side flow normally); here we call the admin API.
    res = supabase.auth.admin.create_user({
        'email': email,
        'password': password,
        'email_confirm': True,
        'user_metadata': {'role': role},
    })
    if res.get('error'):
        return jsonify({'error': res['error']['message']}), 400
    # Generate a JWT for the new user (using the auth API)
    token_res = supabase.auth.api.generate_link('magiclink', email)
    return jsonify({'message': 'user created', 'user': res['user'], 'login_token': token_res.get('properties')})

@auth_bp.route('/login', methods=['POST'])
def login():
    """Authenticate a user and return a JWT.
    JSON payload: { email, password }
    """
    data = request.get_json() or {}
    email = data.get('email')
    password = data.get('password')
    if not email or not password:
        return jsonify({'error': 'email and password required'}), 400
    res = supabase.auth.sign_in_with_password({
        'email': email,
        'password': password,
    })
    if res.get('error'):
        return jsonify({'error': res['error']['message']}), 401
    return jsonify({'access_token': res['session']['access_token'], 'refresh_token': res['session']['refresh_token']})

