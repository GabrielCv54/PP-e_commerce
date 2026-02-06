from flask_sqlalchemy import SQLAlchemy
import os 
import secrets

db = SQLAlchemy()

def app_config(app):
    app.config['PORT'] = 5000
    app.config['DEBUG'] = True
    app.config['HOST'] = '127.0.0.1'
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY') or secrets.token_hex(32)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ecompre.db'

    db.init_app(app)

