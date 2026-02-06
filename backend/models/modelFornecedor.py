from config import db

class Fornecedor(db.Model):
    __tablename__ = 'fornecedor'

    id = db.Column(db.Integer,primary_key=True,nullable=False)
    nome_empresa = db.Column(db.String(150),nullable=False)
    tipo_fornecimento = db.Column(db.String(150),nullable=False)
    preco_forn = db.Column(db.Float,nullable=False)
    is_iso9001 = db.Column(db.Boolean)

    def __init__(self,nome_empresa,tipo_fornecimento,preco_forn,is_iso9001):
        self.nome_empresa = nome_empresa
        self.tipo_fornecimento = tipo_fornecimento
        self.preco_forn = preco_forn
        self.is_iso9001 = is_iso9001

    def dici(self):
        return {'nome_empresa':self.nome_empresa,'tipo_fornecimento':self.tipo_fornecimento,'preco_forn':self.preco_forn,'is_iso9001':self.is_iso9001}