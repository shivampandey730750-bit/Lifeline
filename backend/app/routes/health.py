import os
from flask import Blueprint, jsonify
from supabase import create_client, Client

# Simple health check endpoint
health_bp = Blueprint('health', __name__)

@health_bp.route('/ping', methods=['GET'])
def ping():
    return jsonify({'status': 'ok'}), 200

