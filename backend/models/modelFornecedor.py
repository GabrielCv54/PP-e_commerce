from config import db

class Fornecedor(db.Model):
    id = db.Column(db.Integer,primary_key=True,nullable=False)
    empresa = db.Column(db.String(150))