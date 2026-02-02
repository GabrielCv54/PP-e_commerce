from config import db

class Cliente(db.Model):
    __tablename__ = 'clientes'

    id = db.Column(db.Integer,primary_key=True)
    nome = db.Column(db.String(100),nullable=False)
    email = db.Column(db.String(55),nullable=False)
    data_nasc = db.Column(db.Date,nullable=False)
    cep = db.Column(db.Integer,nullable=False)
    user = db.Column(db.String(100),nullable=False)
    senha = db.Column(db.String(255),nullable=False) 

    def __init__(self,nome,email,data_nasc,cep,user,senha):
        self.nome = nome
        self.email = email
        self.data_nasc = data_nasc
        self.cep = cep
        self.user = user
        self.senha = senha

    def dici(self):
        return {'nome':self.nome,'email':self.email,'data_nasc':self.data_nasc,'cep':self.cep,'username':self.user,'senha':self.senha} 

