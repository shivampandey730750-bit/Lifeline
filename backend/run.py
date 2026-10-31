import os
from app import create_app

# Load .env automatically via python-dotenv if present (Flask will do it via Config)
# Ensure the working directory is the project root when running this script.

if __name__ == "__main__":
    # Use environment variables for host/port; defaults match .env.example
    host = os.getenv("HOST", "0.0.0.0")
    port = int(os.getenv("PORT", "5000"))
    debug = os.getenv("FLASK_DEBUG", "False").lower() in ("true", "1")
    app = create_app()
    app.run(host=host, port=port, debug=debug)

