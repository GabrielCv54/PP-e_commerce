from config import db

class Produto(db.Model):
    __tablename__ = 'produto'

    id = db.Column(db.Integer,primary_key=True)
    nome = db.Column(db.String(75),nullable=False)
    preco = db.Column(db.Numeric(10,2),nullable=False)
    descricao = db.Column(db.String(155))
    setor = db.Column(db.String(50),nullable=False)
    img = db.Column(db.Text,nullable=False)

    def __init__(self,nome,preco,descricao,setor,img):
        self.nome = nome
        self.preco = preco
        self.descricao = descricao
        self.setor = setor
        self.img = img

    def dici(self):
        return {'id':self.id,'nome':self.nome,'preco':self.preco,'descricao':self.descricao,'setor':self.setor,'img':self.img}
    
    
class ProdutoNaoEncontrado(Exception):
    pass