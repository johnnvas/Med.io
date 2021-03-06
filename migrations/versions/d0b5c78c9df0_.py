"""empty message

Revision ID: d0b5c78c9df0
Revises: 51f8f8c6061a
Create Date: 2021-08-04 12:08:39.437119

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd0b5c78c9df0'
down_revision = '51f8f8c6061a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('imageUrl', sa.String(length=1000), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'imageUrl')
    # ### end Alembic commands ###
