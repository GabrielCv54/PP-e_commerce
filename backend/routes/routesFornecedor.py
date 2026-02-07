from models.modelFornecedor import Fornecedor,db,SupplierNotFound
from flask import Blueprint,request,jsonify

fornec_blueprint = Blueprint('fornecedor',__name__,url_prefix='/ecompre')

@fornec_blueprint.route('/fornecedores',methods=["GET"])
def request_return_suppliers():
    suppliers = Fornecedor.query.all()
    return [supplier.dici() for supplier in suppliers]

@fornec_blueprint.route('/fornecedores',methods=['POST'])
def request_create_supplier():
    supplier_data = request.get_json()
    new_supp = Fornecedor(company_name=supplier_data.get('nome_empresa'),supply_type=supplier_data.get('tipo_fornecimento'),supply_price=supplier_data.get('preco_forn'),logo_empresa=supplier_data.get('logo_empresa'),is_iso9001=supplier_data.get('is_iso9001'))
    db.session.add(new_supp)
    db.session.commit()
    return jsonify({'Sucesso':'Fornecedor cadastrado com sucesso!!'}),201

@fornec_blueprint.route('/fornecedores/<int:id>',methods=['DELETE'])
def request_delete_supplier(id):
    try:
        supplier = Fornecedor.query.get(id)
        db.session.delete(supplier)
        db.session.commit()
        return jsonify({"Sucesso":"Fornecedor excluído do sistema"}),200
    except SupplierNotFound:
        return jsonify({'erro':'fornecedor não encontrado!!'}),404