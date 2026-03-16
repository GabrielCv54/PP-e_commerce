from config import db

class Chat(db.Model):
    __tablename__ = 'chat'
    
    id = db.Column(db.Integer,primary_key=True)
    subject = db.Column(db.String(50),nullable=False)
    message = db.Column(db.String(155), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __init__(self,subject,message,user_id):
        self.subject = subject
        self.message = message
        self.user_id = user_id

    def dici(self):
        return {"assunto":self.subject,'mensagem':self.message,'usuário':self.user_id}
    
    