import os
from app import create_app

# Create app instance at module level for Gunicorn WSGI servers (Render/Railway/Heroku)
app = create_app()

if __name__ == "__main__":
    host = os.getenv("HOST", "0.0.0.0")
    port = int(os.getenv("PORT", "5000"))
    debug = os.getenv("FLASK_DEBUG", "False").lower() in ("true", "1")
    app.run(host=host, port=port, debug=debug)
