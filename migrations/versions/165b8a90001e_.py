"""empty message

Revision ID: 165b8a90001e
Revises: d14b950d682a
Create Date: 2024-07-31 21:55:31.175026

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '165b8a90001e'
down_revision = 'd14b950d682a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_admin', sa.Boolean(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.drop_column('is_admin')

    # ### end Alembic commands ###
