def welcome():
    print("WELCOME TO MY TIC TAC TOE!")
welcome()

list_board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]

def make_board():
    print("*********")
    for board in list_board:
        print('--|---|--')
        print(" | ".join(board))
    print("--|---|--")
    print("*********")
        
def player_turn(player):
    row = int(input(f'{player} choose a row: '))
    column = int(input('now choose a column: '))
    while list_board[row -1][column -1] != ' ':
        print('This spot is already taken, choose a another one')
        row = int(input(f'{player} choose a row: '))
        column = int(input('now choose a column: '))
    else:
        list_board[row -1][column -1] = player
        make_board()
        
def check_win():
    win_combination = [
    [(0,0), (0,1), (0,2)],
    [(1,0), (1,1), (1,2)],
    [(2,0), (2,1), (2,2)],
    [(0,0), (1,0), (2,0)],
    [(0,1), (1,1), (2,1)],
    [(0,2), (1,2), (2,2)],
    [(0,0), (1,1), (2,2)],
    [(0,2), (1,1), (2,0)]
    ] 
    lst_player = ['X', 'O']
    for player in lst_player:
        for comb in win_combination:
            counter = 0
            for position in comb:
                if list_board[position[0]][position[1]] == player:
                    counter += 1
                else:
                    break
            if counter == 3:
                print(f'{player} has win the game')
                return True   
    pos_counter = 0
    for row in list_board:
        for position in row:
            if position != ' ':
                pos_counter += 1
            else:
                break
    if pos_counter == 9:
        print('it is a tie')
        return True


def play():
    welcome()
    while True:
        make_board()
        player_turn('X')
        if check_win() == True:
            break
        player_turn('O')
        if check_win() == True:
            break
              
play()