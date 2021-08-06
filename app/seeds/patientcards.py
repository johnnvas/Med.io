from app.models import db, patientCard
from datetime import date



# Adds a demo user, you can add other users here if you want
def seed_patientCards():
    patientCard1 = patientCard(
        userId=1, upperbody='yes', lowerbody='no', diagnosis='you hella sick', comment='my leg hurts when i sit')
    patientCard2 = patientCard(
         userId=2, upperbody='no', lowerbody='yes', diagnosis='you hella sick', comment='my arm hurts when i blink')
    patientCard3 = patientCard(
       userId=3, upperbody='yes', lowerbody='no', diagnosis='you hella sick', comment='i hear bells when i sneeze')

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
