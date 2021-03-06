"""empty message

Revision ID: 6d5a15ce021c
Revises: 
Create Date: 2021-07-29 23:17:50.556362

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6d5a15ce021c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('doctors',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('firstName', sa.String(length=80), nullable=False),
    sa.Column('lastName', sa.String(length=80), nullable=False),
    sa.Column('email', sa.String(length=225), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('firstName', sa.String(length=80), nullable=False),
    sa.Column('lastName', sa.String(length=80), nullable=False),
    sa.Column('email', sa.String(length=225), nullable=False),
    sa.Column('dob', sa.Date(), nullable=False),
    sa.Column('medicalconditions', sa.String(length=2000), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('patientCards',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.Column('doctorId', sa.Integer(), nullable=True),
    sa.Column('diagnosis', sa.VARCHAR(length=1000), nullable=True),
    sa.Column('upperbody', sa.VARCHAR(length=500), nullable=True),
    sa.Column('lowerbody', sa.VARCHAR(length=500), nullable=True),
    sa.Column('comment', sa.VARCHAR(length=1000), nullable=True),
    sa.ForeignKeyConstraint(['doctorId'], ['doctors.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('patientCards')
    op.drop_table('users')
    op.drop_table('doctors')
    # ### end Alembic commands ###
