from app.models import db, Doctor
from datetime import date

# Adds a demo Doctor, you can add other Doctors here if you want
def seed_doctors():
    mat = Doctor(
        firstName='Mat', lastName='matwo', email='mat@aa.io', hashed_password='password')
    barnie = Doctor(
        firstName='barnie', lastName='stinson', email='barnie@aa.io', hashed_password='password')
    steve = Doctor(
        firstName='steve', lastName='rogers', email='steve@aa.io', hashed_password='password')

    db.session.add(mat)
    db.session.add(barnie)
    db.session.add(steve)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the Doctors table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_doctors():
    db.session.execute('TRUNCATE doctors RESTART IDENTITY CASCADE;')
    db.session.commit()
