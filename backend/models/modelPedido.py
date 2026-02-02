from config import db

class Pedido(db.Model):
    __tablename__ = 'pedido'

    id = db.Column(db.Integer,primary_key=True,nullable=False)
    
    