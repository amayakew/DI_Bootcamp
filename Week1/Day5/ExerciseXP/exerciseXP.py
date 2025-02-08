
def create_board(size = 3):
    board = []
    for _ in range(size):
        row = []
        for _ in range(size):
            row.append(' ')
        board.append(row)
    return board


board = create_board()

def up_down_border():
    len_border = 1 + len(board) * 6
    border = '*' * len_border
    return border

def inside_border():
    border = '*'
    for i in range(len(board)):
        if i == 0:
            border += '-' * 5
        else:
            border += '|' + '-' * 5
    border += '*'
    return border

def row_to_print(row):
    board_row = '*'
    for i in range(len(board)):
        if i == 0:
            board_row += ' ' * 2 + board[row][i] + ' ' * 2
        else:
            board_row += '|' + ' ' * 2 + board[row][i] + ' ' * 2
    board_row += '*'
    return board_row
    

def game_board():
    board_to_print = up_down_border() + '\n'
    for i in range(len(board)):
        if i == 0:
            board_to_print += row_to_print(i) + '\n'
        else:
            board_to_print += inside_border() + '\n' + row_to_print(i) + '\n'
    board_to_print += up_down_border()
    print(board_to_print)
    

def player_input(player):
    print(f"Player {player}'s turn: ")
    
    row_number = int(input('Enter row: '))
    column_number = int(input('Enter column: '))
    if board[row_number][column_number] == ' ':
        board[row_number][column_number] = player
    else:
        print('This place is already taken, please select another one.')
        player_input(player)


def check_win():
    for board_row in board:
        if board_row.count('X') == len(board_row) or board_row.count('O') == len(board_row):
            return True
        
    for col in range(len(board_row)):
        col_values = []
        for board_row in board:
            col_values.append(board_row[col])
        if col_values.count('X') == len(col_values) or col_values.count('O') == len(col_values):
            return True

    cross_values = []    
    for cross in range(len(board)):
        cross_values.append(board[cross][cross])
    if cross_values.count('X') == len(cross_values) or cross_values.count('O') == len(cross_values):
        return True
    
    cross_values = []
    max_cross = len(board) - 1
    for cross in range(len(board)):
        cross_values.append(board[cross][max_cross - cross])
    if cross_values.count('X') == len(cross_values) or cross_values.count('O') == len(cross_values):
        return True

def check_tie():    
    for i in board:
        if ' ' in i:
            return False
    return True    


def player_turn(player):
    player_input(player)
    game_board()
    result = check_win()
    if result :
        print(f'GAME OVER: player X wins:)')
        return False 
    else:
        result = check_tie()
        if result:
            print('GAME OVER: tie:)')
            return False
    return True
    
def play():
    print('Welcome to TIC TAC TOE!')
    game_board()

    while True:

        player_result = player_turn('X')
        if not player_result:
            break

        player_result = player_turn('O')
        if not player_result:
            break

play()






'''Create a TicTacToe game in python, where two users can play together.

Instructions
The game is played on a grid that’s 3 squares by 3 squares.
Players take turns putting their marks (O or X) in empty squares.
The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

Hint
To do this project, you basically need to create four functions:
display_board() – To display the Tic Tac Toe board (GUI).
player_input(player) – To get the position from the player.
check_win() – To check whether there is a winner or not.
play() – The main function, which calls all the functions created above.
Note: The 4 functions above are just an example. You can implement many more helper functions or choose a completely different appoach if you want.

Tips : Consider the following
What functionality will need to accur every turn to make this program work?
After contemplating the question above, think about splitting your code into smaller pieces (functions).
Remember to follow the single responsibility principle! each function should do one thing and do it well!'''