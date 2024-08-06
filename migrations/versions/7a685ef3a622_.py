"""empty message

Revision ID: 7a685ef3a622
Revises: 39697a208ec4
Create Date: 2024-08-06 15:02:52.540333

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7a685ef3a622'
down_revision = '39697a208ec4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('paymentMethods', schema=None) as batch_op:
        batch_op.alter_column('exp_date',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
        batch_op.drop_constraint('paymentMethods_cvv2_key', type_='unique')
        batch_op.drop_constraint('paymentMethods_exp_date_key', type_='unique')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('paymentMethods', schema=None) as batch_op:
        batch_op.create_unique_constraint('paymentMethods_exp_date_key', ['exp_date'])
        batch_op.create_unique_constraint('paymentMethods_cvv2_key', ['cvv2'])
        batch_op.alter_column('exp_date',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)

    # ### end Alembic commands ###
