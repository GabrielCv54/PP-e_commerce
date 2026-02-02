from flask_cors import CORS
from flask import Blueprint, request, redirect,jsonify,url_for
from models.modelCliente import Cliente
import bcrypt
from config import db
from datetime import datetime


cliente_blueprint = Blueprint('cliente_bp',__name__,url_prefix='/ecompre')
CORS(cliente_blueprint)

@cliente_blueprint.route('/clientes',methods=["GET"])
def returnAllClients():
    clientes = Cliente.query.all()
    return [cli.dici() for cli in clientes]

@cliente_blueprint.route("/clientes/<int:id>",methods=['GET'])
def returnClient(id):
    try:
        client = Cliente.query.get(id)
        return client.dici()
    except ClientNotFound:
        return jsonify({'Erro':"não foi encontrado o cliente"}),404
    

@cliente_blueprint.route("/clientes/login",methods=['POST'])
def login():
    try:
        data = request.json
        user = data.get('user')
        password = data.get('senha')

        client_username = Cliente.query.filter_by(user=user).first()
        if client_username  and bcrypt.checkpw(password.encode('utf-8'), client_username.senha.encode('utf-8')):
          return jsonify({"sucesso":"indo para á pagina principal"}),200
       
        return jsonify({'erro':"credenciais inválidas"}),401
    except Exception as err:
        return jsonify({'erro':f'problemas no servidor {str(err)}'}),500

@cliente_blueprint.route("/clientes/cadastro",methods=['POST'])
def cadastro():
        name = request.json.get('nome')
        email = request.json.get('email')
        if Cliente.query.filter_by(email=email).first():
            return jsonify({"erro":"esse email já existe!!"}),400    
        data_nasc = request.json.get('data_nasc')
        date_conversion = datetime.strptime(data_nasc,"%Y-%M-%d").date()
        cep = request.json.get('cep')
        username = request.json.get('user')
        password = request.json.get('senha')
        password_bytes = password.encode("utf-8")
        password_hash = bcrypt.hashpw(password_bytes, bcrypt.gensalt()).decode('utf-8')
        client = Cliente(nome=name,email=email,data_nasc=date_conversion,cep=cep,user=username,senha=password_hash)
        try:
            db.session.add(client)
            db.session.commit()
            return jsonify({"sucesso":"Cliente cadastrado com sucesso"}),201
        except Exception as erro:
            db.session.rollback()
            return jsonify({"Erro":f"ocorreu um erro durante o cadastroo {str(erro)}"}),500      


cliente_blueprint.route('/clientes/<int:id>',methods=['DELETE'])
def deleteClient(id):
    pass