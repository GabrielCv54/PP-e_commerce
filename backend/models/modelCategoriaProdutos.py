from config import db

class CategoriaProduto(db.Model):
    id = db.Column(db.Integer, primary_key=True)