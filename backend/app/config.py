import os

class Config:
    """Flask configuration loaded from environment variables.
    All secret keys (service role, JWT secret) must be set in the environment
    and never checked into version control.
    """
    # Core Flask settings
    DEBUG = os.getenv('FLASK_DEBUG', 'False').lower() in ('true', '1')
    TESTING = os.getenv('FLASK_TESTING', 'False').lower() in ('true', '1')
    SECRET_KEY = os.getenv('FLASK_SECRET_KEY', 'change-me-in-prod')

    # Supabase connection – service role key kept on backend only
    SUPABASE_URL = os.getenv('SUPABASE_URL')
    SUPABASE_SERVICE_ROLE_KEY = os.getenv('SUPABASE_SERVICE_ROLE_KEY')

    # Frontend origin for CORS (development defaults to Vite dev server)
    FRONTEND_ORIGIN = os.getenv('FRONTEND_ORIGIN', 'http://localhost:5173')

    # Rate limiting configuration
    RATE_LIMIT = os.getenv('RATE_LIMIT', '60 per minute')

    # Database URL – Supabase provides a Postgres connection string
    DATABASE_URL = os.getenv('DATABASE_URL')

