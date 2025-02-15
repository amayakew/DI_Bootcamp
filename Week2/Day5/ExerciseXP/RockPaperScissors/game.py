from random import choice

class Game:
    def get_user_item(self):
        while True:
            user_move = input("Select (r)ock, (p)aper or (s)cissors: ")
            if user_move not in ['r','p','s']:
                print('Invalid choice, try again.')
            else:
                return user_move

    def get_computer_item(self):
        return choice(['r','p','s'])

    def get_game_result(self,user_item,computer_item):
        if user_item == computer_item:
            return "draw"
        if (user_item == 'r' and computer_item == 's') \
            or (user_item == 'p' and computer_item == 'r') \
                or (user_item == 's' and computer_item == 'p'):
            return "win"
        return "loss"
    
    def get_result_inpast(self,result):
        if result == "draw":
            return "drew"
        if result == "win":
            return "won"
        return "lose"
    
    def get_move_name(self,item):
        if item == 'r':
            return 'rock'
        if item == 'p':
            return 'paper'
        return 'scissors'

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item,computer_item)
        print(f"You selected {self.get_move_name(user_item)}. The computer selected {self.get_move_name(computer_item)}. You {self.get_result_inpast(result)}.")
        return result