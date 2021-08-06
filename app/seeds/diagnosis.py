from app.models import db, Diagnosis
from datetime import date

# Adds a demo Diagnosis, you can add other Doctors here if you want
def seed_diagnosis():
    one = Diagnosis(
        comment='youre super sick', doctorId=4, patientCardId=1)
    two = Diagnosis(
        comment='oh Wow', doctorId=5, patientCardId=2)
    three = Diagnosis(
        comment='damn man', doctorId=6, patientCardId=3)

    db.session.add(one)
    db.session.add(two)
    db.session.add(three)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the Doctors table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_diagnosis():
    db.session.execute('TRUNCATE doctors RESTART IDENTITY CASCADE;')
    db.session.commit()
