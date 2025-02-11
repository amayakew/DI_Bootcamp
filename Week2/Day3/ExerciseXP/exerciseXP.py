# Exercise1

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        currency = self.currency
        if self.amount > 1:
            currency += 's'
        return f'{self.amount} {currency}'

    def __int__(self):
        return self.amount
    
    def __repr__(self):
        return self.__str__()

    def __add__(self,other):
        if isinstance(other,Currency):
            if self.currency == other.currency:
                self.amount += other.amount
            else:
                raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
        else:
            self.amount += other
        return self

    

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)


print(str(c1))
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1)
c1 += 5
print(c1)
c1 += c2
print(c1)
c1 + c3


# Exercise2

from func import sum_of_numbers

sum_of_numbers(5,9)

# Exercise3

import random
import string

def get_random_string(length = 5):
    random_string = ''   
    for _ in range(length):
        letter = random.choice(string.ascii_letters)
        random_string += letter

    return random_string

print(get_random_string())
print(get_random_string(12))

# Exercise4

import datetime

def get_current_date():
    current_date = datetime.date.today()
    return current_date

print(get_current_date())

# Exercise5

import datetime

def rest_of_the_year():
    current_date_time = datetime.datetime.now()
    print(f"Current date and time: {current_date_time}")

    next_year_beginning = datetime.datetime(2026, 1, 1, 0, 0, 0)
    time_left = next_year_beginning - current_date_time

    hours_left = int(time_left.seconds / 3600)
    minutes_left = int((time_left.seconds % 3600) / 60)
    seconds_left = int(time_left.seconds % 60)

    print(f'The 1st of January is in {time_left.days} days and {hours_left}:{minutes_left}:{seconds_left} hours')

rest_of_the_year()

# Exercise6

from datetime import datetime, date

def get_age_in_minutes(birthdate_str: str = '01.02.1996'):
    birthdate = datetime.strptime(birthdate_str, "%d.%m.%Y").date()
    print(f'Date of my birth is {birthdate}')

    current_date = date.today()
    print(f"Today is {current_date}")

    difference = current_date - birthdate
    print(difference)
    age_in_minutes = int(difference.total_seconds() / 60)
    print(f"My age in minutes is {age_in_minutes}")
    
get_age_in_minutes()


# Exercise7

from faker import Faker

users = []

def add_user(name,address,language_code):
    users.append({'name':name, 'address':address, 'language_code':language_code})

fake = Faker()
fake.name()
fake.address()
fake.language_code()


for _ in range(4):
    add_user(fake.name(), fake.address(), fake.language_code())

print(users)