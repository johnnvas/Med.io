from app.models import db, patientCard
from flask import Blueprint

patient_cards_route = Blueprint('patient_cards_route', __name__)

@patient_cards_route.route('/api/patient_cards', methods=['GET'])
def get_patient_cards():
    patient_cards = patientCard.query.all()
    return {
        'patient_cards': [patient_card.to_dict() for patient_card in patient_cards]
    }


@patient_cards_route.route('/<int:id>/<comment>', methods=['PUT'])
def update_patient_card(id, comment):
    patient_card = patientCard.query.get(id)
    patient_card.comment = comment
    print('THIS IS COMMENTTTTTTTTTTTTTTTTTTTTT', patient_card.comment)
    db.session.commit()
    return patient_card.to_dict()


# @patient_cards_route.route('/api/patient_cards', methods=['DELETE'])
# def delete_patient_card(id):
#     patient_card = patientCard.query.get(id)
#     db.session.delete(patient_card)
#     db.session.commit()
#     return {'message': 'Patient Card Deleted'}
