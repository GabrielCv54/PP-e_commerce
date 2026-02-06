from models.modelFornecedor import Fornecedor
from flask import Blueprint,request,jsonify

fornec_blueprint = Blueprint('fornecedor',__name__,url_prefix='/ecompre')