from .db import db
from sqlalchemy.sql.schema import ForeignKey

class patientCard(db.Model):
    __tablename__ = 'patientCards'


    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, ForeignKey('users.id'))
    doctorId = db.Column(db.Integer, ForeignKey('doctors.id'))
    diagnosis = db.Column(db.VARCHAR(1000))
    upperbody = db.Column(db.VARCHAR(500), nullable=True)
    lowerbody = db.Column(db.VARCHAR(500), nullable=True)
    comment = db.Column(db.VARCHAR(1000), nullable=True)
    created_at = db.Column(db.Date, nullable=False)

    patientCardUser = db.relationship('User', back_populates='userPatientCard')
    patientCardDoctor = db.relationship('Doctor', back_populates='doctorPatientCard')


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'upperbody': self.upperbody,
            'lowerbody': self.lowerbody,
            'comment': self.comment,
            'created_at': self.created_at
        }
