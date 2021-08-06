from .db import db
from sqlalchemy.sql.schema import ForeignKey

class Diagnosis(db.Model):
    __tablename__ = 'diagnoses'


    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(2000), nullable=False)
    doctorId = db.Column(db.Integer,  ForeignKey('users.id'), nullable=False,)
    patientCardId = db.Column(db.Integer,  ForeignKey('patientCards.id'), nullable=False,)


    diagnosisPatientCard = db.relationship('patientCard', back_populates='patientCardDiagnosis')


    def to_dict(self):
        return {
            'id': self.id,
            'comment': self.comment,
            'doctorId': self.doctorId,
            'patientCardId': self.patientCardId
        }
