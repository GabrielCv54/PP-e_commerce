from config import db

class Chat(db.Model):
    __tablename__ = 'chat'

    id = db.Column(db.Integer,primary_key=True)
    subject = db.Column(db.String(150),nullable=False)
    message = db.Column(db.String(150),nullable=False)
    user_id = db.Column(db.Integer,db.ForeignKey('clientes.id'))

    def __init__(self,message,subject,user_id):
        self.subject = subject
        self.message = message
        self.user_id = user_id

    def dici(self):
        return {'assunto':self.subject,'mensagem':self.message,'cliente':self.user_id}