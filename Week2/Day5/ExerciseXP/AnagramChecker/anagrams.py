
from anagram_checker import AnagramChecker
import re
import requests

def validate_chars(word):
    if not re.search(r"[^a-zA-Z]", word):
        return True
    else:
        print('Please enter ONE word with alphabetic characters only!')

def is_english_word(word):
    response = requests.get(f"https://api.dictionaryapi.dev/api/v2/entries/en/{word}")
    if response.status_code == 200:
        return True
    else:
        print('Please eneter valid English word!')

def validate_input(word,checker):
    if validate_chars(word) and is_english_word(word):
        if checker.is_valid_word(word):
            return True
        else:
            print('Please eneter other word.')

def menu():
    checker = AnagramChecker('words.txt')

    while True:
        print("Choose an option:")
        print("1. Enter word")
        print("2. Exit")

        choice = input("Enter your choice (1/2): ")

        if choice == '1':
            word = input("Please, write your word, e.g.'meat': ")
            word = word.strip().upper()
            if validate_input(word,checker):
                anagrams = checker.get_anagrams(word)
                print(f"\nYour word is {word}.\nThis is a valid English word.\nAnagrams for your word: {', '.join(anagrams)} ")

        elif choice == '2':
            print("You chose to exit. Bye!:)")
            break
        else:
            print("Invalid choice. Please choose again.")
        
        print('-------------------------------------------------\n')

menu()