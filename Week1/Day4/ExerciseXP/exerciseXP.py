# Exercise1

def display_message():
    print('I\'m a Full-Stuck student in Developers Institute. Now I\'m learning Python.')


display_message()


# Exercise2

def favorite_book(title:str):
    print(f'One of my favourite books is {title}')

favorite_book('"Brave New World" by Aldous Huxley')


# Exercise3

def describe_city(city:str,country:str = 'Israel'):
    print(f'{city} is in {country}')

describe_city('Minsk','Belarus')   
describe_city('Tel-Aviv') 
describe_city(country='Canada',city='Toronto')


# Exercise4

import random

def compare_numbers(number:int):
    number_random = random.randrange(1, 100)
    if number == number_random:
        print(f'Look, your number is the same as mine: {number}, {number_random}')
    else:
        print(f'The numbers are different: {number}, {number_random}')

compare_numbers(15)


# Exercise5

def make_shirt(size='"large"',text='"I love Python"'):
    # '''prints the size of the shirt and the print text'''
    print(f'The size of the shirt is {size} and the print text is {text}')

make_shirt('"M"','"I WANT TO BREAK FREE"')
make_shirt()
make_shirt('"medium"')
make_shirt(size='"small"',text='"All I need is COFFEE"')


# Exercise6

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians():
    return list(magician_names)

print(show_magicians())

def make_great():
    for index,name in enumerate(magician_names):
        magician_names[index] = f'{name} the Great'
    print(magician_names)

make_great()
print(show_magicians())
        

# Exercise7

# 7.1-7.3

import random

def get_random_temp():
    return random.randrange(-10, 40)

def main():
    temp = get_random_temp()
    print(f'The temperature right now is {temp}°C.')

    if temp < 0:
        print('Wow! It seems like winter outside! Keep warm!')
    elif temp < 16:
        print('Today it\'s a little chilly, better put on the fleecewear.')
    elif temp <= 23:
        print('If you leave the house early in the morning or come back late at night, take long-sleeve with you.\nIf not, enjoy the sun.')
    elif temp < 32:
        print('Stay hydrated, drink plenty of water.')
    else:
        print('Stay indoors or in the shade as much as possible. Use sunscreen outside.')

main()

# 7.4-7.6

import random

def get_random_temp(season):
    if season == 'winter':
        return round(random.uniform(-10, 0),1)
    elif season == 'spring' or season == 'autumn':
        return round(random.uniform(1, 20),1)
    else:
        season == 'summer'
        return round(random.uniform(21, 35),1)
    
def get_season(month):
    if month == 12 or month < 3:
        return 'winter'
    elif month < 6:
        return 'spring'
    elif month < 9:
        return 'summer'
    else:
        return 'autumn'

def main():
    month = int(input('Enter number of month: '))
    season = get_season(month)
    print(f"It's {season}")
    temp = get_random_temp(season)
    print(f'The temperature right now is {temp}°C.')

    if temp < 0:
        print('Wow! It seems like winter outside! Keep warm!')
    elif temp < 16:
        print('Today it\'s a little chilly, better put on the fleecewear.')
    elif temp <= 23:
        print('If you leave the house early in the morning or come back late at night, take long-sleeve with you.\nIf not, enjoy the sun.')
    elif temp < 32:
        print('Stay hydrated, drink plenty of water.')
    else:
        print('Stay indoors or in the shade as much as possible. Use sunscreen outside.')

main()

# Exercise8

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]
right_answers = 0
user_answers = []
wrong_answers = []
def quiz():
    global right_answers
    for item in data:
        question = item['question']
        right_answer = item['answer']
        answer = input(question)
        if answer == right_answer:
            right_answers += 1
        else:
            wrong_answers.append(answer)
            user_answers.append({
                 'question': question,
                 'answer': answer,
                 'correct_answer': right_answer
            })
def result():
        if len(wrong_answers) > 3:
             print('Try again:(')  
        return f'Number of correct answers: {right_answers}'    

quiz()
print(result())
print(f'Look through your wrong answers: {user_answers}')
