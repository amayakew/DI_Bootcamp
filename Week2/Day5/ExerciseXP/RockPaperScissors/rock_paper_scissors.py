
from game import Game

def get_user_menu_choice():
    print("\nMenu:")
    print("(g) Play a new game")
    print("(x) Show scores and exit\n")

    choice = input("Your choice: ")
    if choice != 'g' and choice != 'x':
        print("Please, choose 'g' or 'x'")
        return None
    else:
        return choice

def print_results(results):
    print(f"""
Game Results:
    You won {results['win']} times
    You lose {results['loss']} times
    You drew {results['draw']} times
    
Thank you for playing!:)""")

def main():
    results = {'win':0,
               'loss':0,
               'draw':0}
    while True:
        choice = get_user_menu_choice()
        if choice is None:
            continue
        if choice == 'g':
            game = Game()
            result = game.play()
            results[result] += 1
        else:
            print_results(results)
            break

main()