import psycopg2
from dotenv import load_dotenv
import os

load_dotenv()

DB_DATABASE = os.getenv('DATABASE')
DB_USERNAME = os.getenv('NAME')
DB_HOSTNAME = os.getenv('HOSTNAME')
DB_PASSWORD = os.getenv('PASSWORD')
DB_PORT = os.getenv('PORT')

connection = psycopg2.connect(database = DB_DATABASE, 
                              user = DB_USERNAME,
                              password = DB_PASSWORD,
                              host = DB_HOSTNAME,
                              port = DB_PORT)

cursor = connection.cursor()

def get_cursor():
    return cursor

def commit():
    return connection.commit()
