# def welcome():
#     print("WELCOME TO MY TIC TAC TOE!")
# welcome()

# count = 0

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
        
# def check_win():
#     win_combination = [
#     [(0,0), (0,1), (0,2)],
#     [(1,0), (1,1), (1,2)],
#     [(2,0), (2,1), (2,2)],
#     [(0,0), (1,0), (2,0)],
#     [(0,1), (1,1), (2,1)],
#     [(0,2), (1,2), (2,2)],
#     [(0,0), (1,1), (2,2)],
#     [(0,2), (1,1), (2,0)]
#     ] 
#     lst_player = ['X', 'O']
#     for player in lst_player:
#         for comb in win_combination:
#             counter = 0
#             for position in comb:
#                 if list_board[position[0]][position[1]] == player:
#                     counter += 1
#                 else:
#                     break
#             if counter == 3:
#                 print(f'{player} has win the game')
#                 return True   
#     pos_counter = 0
#     for row in list_board:
#         for position in row:
#             if position != ' ':
#                 pos_counter += 1
#             else:
#                 break
#     if pos_counter == 9:
#         print('it is a tie')
#         return True


# def play():
#     welcome()
#     while True:
#         make_board()
#         player_turn('X')
#         if check_win() == True:
#             break
#         player_turn('O')
#         if check_win() == True:
#             break
              
# play()



def display_board(board):
    for row in board:
        print(" | ".join(row))
        print("-" * 9)

def player_input(player, board):
    while True:
        try:
            row = int(input(f"Player {player}, enter row (0, 1, 2): "))
            col = int(input(f"Player {player}, enter column (0, 1, 2): "))
            
            if board[row][col] == " ":
                board[row][col] = player
                break
            else:
                print("Cell already taken! Try again.")
        except (ValueError, IndexError):
            print("Invalid input. Enter numbers between 0 and 2.")

def check_win(board):

    for row in board:
        if row[0] == row[1] == row[2] and row[0] != " ":
            return True

    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] and board[0][col] != " ":
            return True

    if board[0][0] == board[1][1] == board[2][2] and board[0][0] != " ":
        return True
    if board[0][2] == board[1][1] == board[2][0] and board[0][2] != " ":
        return True

    return False

def play():
    board = [[" " for _ in range(3)] for _ in range(3)]
    players = ["X", "O"]
    turn = 0

    for _ in range(9):
        display_board(board)
        player_input(players[turn], board)

        if check_win(board):
            display_board(board)
            print(f"Player {players[turn]} wins!")
            return

        turn = 1 - turn

    display_board(board)
    print("who is losing is gay as fuck")

play()