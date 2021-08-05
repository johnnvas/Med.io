from .db import db
from sqlalchemy.sql.schema import ForeignKey

class patientCard(db.Model):
    __tablename__ = 'patientCards'


    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, ForeignKey('users.id'))
    # doctorId = db.Column(db.Integer, ForeignKey('doctors.id'))
    diagnosis = db.Column(db.VARCHAR(1000))
    upperbody = db.Column(db.VARCHAR(500), nullable=True)
    lowerbody = db.Column(db.VARCHAR(500), nullable=True)
    comment = db.Column(db.VARCHAR(1000), nullable=True)


    patientCardUser = db.relationship('User', back_populates='userPatientCard')
    patientCardDiagnosis = db.relationship('Diagnosis', cascade='all, delete-orphan',back_populates='diagnosisPatientCard')


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            # 'doctorId': self.doctorId,
            'upperbody': self.upperbody,
            'lowerbody': self.lowerbody,
            'comment': self.comment,
            'diagnosis': self.diagnosis,
            'diagnoses': [d.to_dict() for d in self.patientCardDiagnosis],
            # 'user': self.patientCardUser
        }
