import os
from flask import Flask
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from .config import Config

def create_app():
    """Application factory for the Lifeline Flask backend.

    * Loads configuration from environment variables (or .env file).
    * Enables CORS for the frontend origin (default http://localhost:5173).
    * Sets up request‑rate limiting (default 60 requests/min).
    * Registers blueprint routes for auth, donor, request, and health.
    """
    app = Flask(__name__)
    app.config.from_object(Config)

    # CORS – allow only the frontend origin in development
    CORS(app, resources={r"/api/*": {"origins": app.config.get("FRONTEND_ORIGIN", "http://localhost:5173")}})

    # Rate limiting – simple per‑IP limit
    limiter = Limiter(
        get_remote_address,
        app=app,
        default_limits=[app.config.get("RATE_LIMIT", "60 per minute")],
    )

    # Register route blueprints
    from .routes.auth import auth_bp
    from .routes.donor import donor_bp
    from .routes.request import request_bp
    from .routes.health import health_bp
    from .routes.ai import ai_bp

    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(donor_bp, url_prefix="/api/donor")
    app.register_blueprint(request_bp, url_prefix="/api/request")
    app.register_blueprint(health_bp, url_prefix="/api/health")
    app.register_blueprint(ai_bp, url_prefix="/api/ai")

    @app.route('/')
    def index():
        return {"message": "Lifeline backend running"}

    return app

