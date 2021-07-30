from app.models import db
from flask import Blueprint
from app.models import patientCard

patient_cards_route = Blueprint('patient_cards_route', __name__)

@patient_cards_route.route('/api/patient_cards', methods=['GET'])
def get_patient_cards():
    patient_cards = patientCard.query.all()
    return {
        'patient_cards': [patient_card.to_dict() for patient_card in patient_cards]
    }
