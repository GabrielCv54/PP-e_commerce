from flask import Blueprint, request
from config import db
from models.modelChat import Chat

chat_blueprint = Blueprint('chat_bp',url_prefix='/ecompre')


@chat_blueprint.route('/contato',methods=['GET'])
def return_all_messages():
    chats = Chat.query.all()
    return [chat.dici() for chat in chats]

@chat_blueprint.route('/contato/<str:subject>',methods=['GET'])
def return_message_subject(subject):
    chat = Chat.query.get(subject)
    return chat.dici()


@chat_blueprint.route('/contatos',methods=['POST'])
def write_message():
    new_chat = request.get_json()
    chat = Chat(message=new_chat['mensagem'],subject=new_chat['assunto'])
    db.session.add(chat)
    db.session.commit()