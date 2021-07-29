from .db import db

class Doctor(db.Model):
    __tablename__ = 'doctors'


    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(80), nullable=False)
    lastName = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(225), unique=True, nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)

    created_at = db.Column(db.Date, nullable=False)

    doctorPatientCard = db.relationship('patientCard', back_populates='patientCardDoctor')

    def to_dict(self):
        return {
            'id': self.id,
            'firstName': self.firstName,
            'lastName': self.lastName,
            'email': self.email,
            'created_at': self.created_at
        }
