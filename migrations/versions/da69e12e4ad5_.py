"""empty message

Revision ID: da69e12e4ad5
Revises: 6d5a15ce021c
Create Date: 2021-08-04 11:47:01.221421

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'da69e12e4ad5'
down_revision = '6d5a15ce021c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('patientCards_doctorId_fkey', 'patientCards', type_='foreignkey')
    op.drop_column('patientCards', 'doctorId')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('patientCards', sa.Column('doctorId', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('patientCards_doctorId_fkey', 'patientCards', 'doctors', ['doctorId'], ['id'])
    # ### end Alembic commands ###