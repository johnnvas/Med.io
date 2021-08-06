from app.models import db, Diagnosis
from flask import Blueprint, request

diagnosis_route = Blueprint('diagnosis_route', __name__)



@diagnosis_route.route('/<int:id>')
def get_single_diagnosis(id):
    diagnosis = Diagnosis.query.filter_by(patientCardId=id).all()
    return {'diagnosis': [d.to_dict() for d in diagnosis]}






@diagnosis_route.route('', methods=['PUT'])
def update_diagnosis():
    diagnosis = Diagnosis.query.get(request.json['id'])
    diagnosis.comment = request.json['comment']

    db.session.commit()
    return diagnosis.to_dict()


@diagnosis_route.route('', methods=['POST'])
def create_diagnosis():
    diagnosis = Diagnosis(
        doctorId=request.json['doctorId'],
        patientCardId=request.json['patientCardId'],
        comment=request.json['comment']
    )

    db.session.add(diagnosis)
    db.session.commit()
    return diagnosis.to_dict()


@diagnosis_route.route('/<int:id>', methods=['DELETE'])
def delete_diagnosis(id):

    diagnosis = Diagnosis.query.get(id)

    db.session.delete(diagnosis)
    db.session.commit()
    return {'id':id}
