from app.models import db, patientCard
from flask import Blueprint, request
from flask_login import current_user

patient_cards_route = Blueprint('patient_cards_route', __name__)


@patient_cards_route.route('/', methods=['GET'])
def get_patient_cards():
    patient_cards = patientCard.query.all()
    return {
        'patient_cards': [patient_card.to_dict() for patient_card in patient_cards]
    }

@patient_cards_route.route('/<int:id>')
def get_single_patient_card(id):
    patient_card = patientCard.query.get(id)
    return {'patient_cards': [patient_card.to_dict()]}






@patient_cards_route.route('', methods=['PUT'])
def update_patient_card():
    patient_card = patientCard.query.get(request.json['id'])
    patient_card.comment = request.json['comment']

    db.session.commit()
    return patient_card.to_dict()


@patient_cards_route.route('/create', methods=['POST'])
def create_patient_card():
    req = request.get_json()
    print('HHHHHHHHHHHHHHHHHEEEEEEEEEEEEEEEEEEEEEEEEEEYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY', type(req))
    patient_card = patientCard(
        userId=current_user.id,
        # doctorId=request.json['doctorId'],
        # diagnosis=request.json['diagnosis'],
        upperbody=req['upperbody'],
        lowerbody=req['lowerbody'],
        comment=req['comment'])

    db.session.add(patient_card)
    db.session.commit()
    return patient_card.to_dict()


@patient_cards_route.route('/<int:id>', methods=['DELETE'])
def delete_patient_card(id):

    patient_card = patientCard.query.get(id)

    db.session.delete(patient_card)
    db.session.commit()
    return {'id':id}
