from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def app_config(app):
    app.config['PORT'] = 5000
    app.config['DEBUG'] = True
    app.config['HOST'] = '127.0.0.1'
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ecompre.db'

    db.init_app(app)

