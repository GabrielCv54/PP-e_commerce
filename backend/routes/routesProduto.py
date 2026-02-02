from flask import Blueprint, request, jsonify
from models.modelProduto import Produto,db, ProdutoNaoEncontrado

produto_blueprint = Blueprint('produto_bp',__name__,url_prefix='/ecompre')

@produto_blueprint.route('/produtos',methods=['GET'])
def getProducts():
    products = Produto.query.all()
    return jsonify([prod.dici() for prod in products])

@produto_blueprint.route("/produtos/<string:nome>",methods=['GET'])
def getProductName(nome):
    try:
        product = Produto.query.filter_by(nome=nome).first()
        return jsonify(product.dici()),200
    except ProdutoNaoEncontrado:
        return jsonify({"Erro":f"O produto {product} não foi encontrado"}),404

@produto_blueprint.route('/produtos/<int:id>',methods=['GET'])
def getProductId(id):
    try:
        product = Produto.query.get(id)
        return product.dici(),200
    except Exception :
        return jsonify({"Erro":f"Não foi possível encontrar produto com id {id}"}),404

@produto_blueprint.route('/produtos',methods=['POST'])
def createProduct():
    data = request.get_json()
    new_product = Produto(nome=data['nome'],preco=float(data['preco']),descricao=data['descricao'],setor=data['setor'],img=data['img'])
    db.session.add(new_product)
    db.session.commit()
    return jsonify({'Sucesso':'Produto criado!!'}),201

@produto_blueprint.route('/produtos/<int:id>',methods=['PUT'])
def updateProduct(id):
    data = request.json
    product_updated = Produto.query.get_or_404(id)
    product_updated.nome = data['nome']
    product_updated.preco = data['preco']
    product_updated.descricao = data['descricao']
    product_updated.setor = data['setor']
    product_updated.img = data["img"]
    try:
        db.session.commit()
        return jsonify({"Sucesso":f"Produto {data['nome']} atualizado com sucesso!!"}),201
    except Exception as err:
        return jsonify({"Erro":f"{err}"}),500

@produto_blueprint.route("/produtos/<int:id>",methods=['DELETE'])
def deleteProduct(id):
    prod = Produto.query.get(id)
    db.session.delete(prod)
    db.session.commit()
    return {},204