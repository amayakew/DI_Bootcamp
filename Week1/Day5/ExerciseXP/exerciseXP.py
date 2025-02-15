
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

def validate_input(input):
    try:
        input_int = int(input)
        if input_int < 0 or input_int >= len(board):
            print(f'Please select values between 0 and {len(board) - 1}')
            return False
    except Exception as e:
        print('Invalid input format')
        return False
    
    return True

def player_input(player):
    print(f"Player {player}'s turn: ")
    
    row_number = input('Enter row: ')
    column_number = input('Enter column: ')

    if not validate_input(row_number) or not validate_input(column_number):
        return player_input(player)
    
    row_number = int(row_number)
    column_number = int(column_number)
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