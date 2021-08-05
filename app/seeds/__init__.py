from flask.cli import AppGroup
from .users import seed_users, undo_users
from .patientcards import seed_patientCards, undo_patientCards
from .diagnosis import seed_diagnosis, undo_diagnosis

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_patientCards()
    seed_diagnosis()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_patientCards()
    undo_diagnosis()
    # Add other undo functions here
