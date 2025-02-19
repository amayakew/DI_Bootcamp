import psycopg2
import requests
import json
import random
from dotenv import load_dotenv
import os

load_dotenv()

DB_DATABASE = os.getenv('DATABASE')
DB_USERNAME = os.getenv('NAME')
DB_HOSTNAME = os.getenv('HOSTNAME')
DB_PASSWORD = os.getenv('PASSWORD')
DB_PORT = os.getenv('PORT')

connection = psycopg2.connect(database=DB_DATABASE, 
                              user=DB_USERNAME,
                              password=DB_PASSWORD,
                              host=DB_HOSTNAME,
                              port=DB_PORT)

cursor = connection.cursor()
cursor.execute('DROP TABLE IF EXISTS random_countries')
cursor.execute('''CREATE TABLE random_countries 
               (id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL,
               capital VARCHAR(100),
               flag_code VARCHAR(100) NOT NULL,
               region VARCHAR(100) NOT NULL,
               population INTEGER)''')

countries_api = requests.get('https://restcountries.com/v3.1/all')
data = countries_api.json()

for i in range(10):
    index = random.randint(1,100)
    name = data[index]['name']['official']
    if '\'' in name:
        name = name.replace('\'','`')
    capital = data[index]['capital'][0]
    if '\'' in capital:
        capital = capital.replace('\'','`')
    flag_code = data[index]['flag']
    region = data[index]['region']
    population = data[index]['population']
    
    cursor.execute(f'''INSERT INTO random_countries(name,capital,flag_code,region,population)
                   VALUES   ('{name}','{capital}','{flag_code}','{region}','{population}')''')

connection.commit()
print('Data was inserted successfully')