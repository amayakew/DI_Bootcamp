# Exercise1

import random 

def get_words_from_file():
    try:
        with open('words_list.txt', 'r') as random_words_list:
            return random_words_list.read().split('\n')
    except FileNotFoundError as err:
        print('File does not exist.')
        raise err
    
def get_random_sentence(length):
    random_words = random.sample(get_words_from_file(), length)
    print(random_words)
    random_sentence = ' '.join(random_words).lower()
    return random_sentence

def main():
    print('This program reads random words from a text file, selects a given number of words, and converts them into a sentence.')
    user_length = int(input('Enter the length of the future sentence(2~20): '))
    if 1 < user_length < 21:
        print(get_random_sentence(user_length))
    else:
        raise Exception('Invalid length!')

    
main()


# Exercise2

import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

new_dict = json.loads(sampleJson)
print(new_dict)

salary_data = new_dict['company']['employee']['payable']['salary']
print(salary_data)

new_dict['company']['employee']['birth_date'] = '12.10.1991'
print(new_dict)

with open ('test.json','w') as test:
    json.dump(new_dict,test,indent=2,sort_keys=True)