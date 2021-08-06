from app.models import db, patientCard
from flask import Blueprint, request

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


@patient_cards_route.route('', methods=['POST'])
def create_patient_card():
    patient_card = patientCard(
        userId=request.json['userId'],
        # doctorId=request.json['doctorId'],
        # diagnosis=request.json['diagnosis'],
        upperbody=request.json['upperbody'],
        lowerbody=request.json['lowerbody'],
        comment=request.json['comment'])

    db.session.add(patient_card)
    db.session.commit()
    return patient_card.to_dict()


@patient_cards_route.route('/<int:id>', methods=['DELETE'])
def delete_patient_card(id):
    print('THIS IS THE ID!!!!!!!!!!!!!!', id)

    patient_card = patientCard.query.get(id)

    print('THIS IS THE PATIENTCARD!!!!!!!!!!!!!!', patient_card)
    db.session.delete(patient_card)
    db.session.commit()
    return {'id':id}
