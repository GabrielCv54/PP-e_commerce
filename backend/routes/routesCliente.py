from flask_cors import CORS
from flask import Blueprint, request, session,jsonify,flash
from models.modelCliente import Cliente
import bcrypt
from config import db
from datetime import datetime
import os

cliente_blueprint = Blueprint('cliente_bp',__name__,url_prefix='/ecompre')
CORS(cliente_blueprint)
os.environ['admin_passw'] = 'admin_passw'

@cliente_blueprint.route('/clientes',methods=["GET"])
def returnAllClients():
    clientes = Cliente.query.all()
    return [cli.dici() for cli in clientes]

@cliente_blueprint.route("/clientes/<int:id>",methods=['GET'])
def returnClient(id):
    try:
        client = Cliente.query.get(id)
        return client.dici()
    except Exception:
        return jsonify({'Erro':"não foi encontrado o cliente"}),404
    

@cliente_blueprint.route("/clientes/login",methods=['POST'])
def login():
    try:
        data = request.json
        user = data.get('user')
        password = data.get('senha')     
        passw = bcrypt.hashpw(password.encode('utf-8'),bcrypt.gensalt())
        env_admin_passw = os.environ.get('admin_passw').encode('utf-8')
        if env_admin_passw:
            admin_passw = bcrypt.hashpw(env_admin_passw,bcrypt.gensalt()).decode('utf-8')
        else:
            admin_passw = passw
        client_username = Cliente.query.filter_by(user=user).first()

        if client_username  and bcrypt.checkpw(password.encode('utf-8'), client_username.senha.encode('utf-8')) :
          flash('Indo para a página principal!!')
          return jsonify({"sucesso":"indo para á pagina principal"}),200   
        
        elif user == 'admin' and bcrypt.checkpw(password == admin_passw):
          session['logged_in'] = True
          session['is_admin'] = True
          session['user'] = user
          
          flash('Administrador logado com sucesso!!')
          return jsonify({'Sucesso':'Administrador logado com sucesso!!'}),200
             
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