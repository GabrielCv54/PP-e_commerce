from config import db, app_config
from flask import Flask
from routes.routesProduto import produto_blueprint
from routes.routesCliente import cliente_blueprint
from flask_cors import CORS

app = Flask(__name__)
app_config(app)
CORS(app,resources={r"/*": { 'origins':'http://localhost:3000'}},supports_credentials=True)

app.register_blueprint(produto_blueprint)
app.register_blueprint(cliente_blueprint)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        print("Banco de dados criado")

    app.run(debug=app.config['DEBUG'],host=app.config['HOST'],port=app.config['PORT'])