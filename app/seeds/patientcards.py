from app.models import db, patientCard
from datetime import date



# Adds a demo user, you can add other users here if you want
def seed_patientCards():
    patientCard1 = patientCard(
        userId=1, upperbody='yes', doctorId=1, lowerbody='no', diagnosis='you hella sick', comment='my leg hurts when i sit', created_at=date.today())
    patientCard2 = patientCard(
         userId=2, upperbody='no', doctorId=2, lowerbody='yes', diagnosis='you hella sick', comment='my arm hurts when i blink', created_at=date.today())
    patientCard3 = patientCard(
       userId=3, upperbody='yes', doctorId=3, lowerbody='no', diagnosis='you hella sick', comment='i hear bells when i sneeze', created_at=date.today())

    db.session.add(patientCard1)
    db.session.add(patientCard2)
    db.session.add(patientCard3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_patientCards():
    db.session.execute('TRUNCATE patientCards RESTART IDENTITY CASCADE;')
    db.session.commit()
