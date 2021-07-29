from app.models import db, User
from datetime import date


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        firstName='Demo', lastName='lition', dob='07/13/1995', medicalconditions='Asthma, diabetes', email='demo@aa.io', password='password', created_at=date.today())
    marnie = User(
        firstName='marnie', lastName='cool-aide', dob='12/16/1962', medicalconditions='Asthma, diabetes', email='marnie@aa.io', password='password', created_at=date.today())
    bobbie = User(
        firstName='bobbie', lastName='brownie', dob='03/22/1972', medicalconditions='Asthma, diabetes', email='bobbie@aa.io', password='password', created_at=date.today())

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
