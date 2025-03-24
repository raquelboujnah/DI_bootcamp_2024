def create_board():
    '''returns the 3x3 board empty
    INPUT: None
    OUTPUT: matrix'''
    board = []
    for j in range(3):
        row = []
        for i in range(3):
            row.append(' ')
        board.append(row)
    return board

def print_board(board):
    '''Prints the 3x3 board stored
    INPUT: matrix
    OUTPUT: None'''
    print()
    print("=============")
    for row in range(len(board)):
        print(f"| {board[row][0]} | {board[row][1]} | {board[row][2]} |")
        if row < len(board) - 1:
            print("|---|---|---|")
    print("=============")

def update_board(board, player, player_choice):
    '''updates the board with row and column values
    INPUT: matrix, string, list of integers
    OUTPUT: None'''
    board[player_choice[0]][player_choice[1]] = player

def input_player(board, player):
    '''takes [row, col] supplied by player and 
    updates the board if [row, col] is valid
    INPUT: matrix, string
    OUTPUT: None'''
    while True:
        print(f"Player {player}'s turn ...")
        print()
        row = int(input("Enter row: "))
        col = int(input("Enter column: "))

        if row not in range(3) or col not in range(3):
            print()
            print('Invalid choice.')
            print()
        elif board[row][col] != ' ':
            print()
            print('Invalid choice.')
            print()
        else:
            update_board(board, player, [row, col])
            break

def check_rows(board, player):
    '''check if player completed a row
    INPUT: matrix, string
    OUTPUT: boolean'''
    for i in range(3):
        if board[i] == [player, player, player]:
            return True
    return False

def check_cols(board, player):
    '''check if player completed a column
    INPUT: matrix, string
    OUTPUT: boolean'''
    for j in range(3):
        rows = 0
        for i in range(3):
            if board[i][j] == player:
                rows += 1
        if rows == 3:
            return True
    return False

def check_main_diag(board, player):
    '''check if player completed the main diagonal
    INPUT: matrix, string
    OUTPUT: boolean'''
    diag = 0
    for d in range(3):
        if board[d][d] == player:
            diag += 1
    if diag == 3:
        return True
    else:
        return False

def check_sec_diag(board, player):
    '''check if player completed the secondary diagonal
    INPUT: matrix, string
    OUTPUT: boolean'''
    diag_sec = 0
    for i in range(3):
        if board[2 - i][i] == player:
            diag_sec += 1
    
    if diag_sec == 3:
        return True
    else:
        return False
        
def check_full(board):
    '''check if board is full
    INPUT: matrix
    OUTPUT: boolean'''
    flag = 0
    for i in range(3):
        for j in range(3):
            if board[i][j] == ' ':
                flag += 1
    if flag == 0:
        return True
    else:
        return False

def check_win(board, player):
    '''check if player won
    INPUT: matrix, string
    OUTPUT: boolean'''
    rows = check_rows(board, player)
    cols = check_cols(board, player)
    main_diag = check_main_diag(board, player)
    sec_diag = check_sec_diag(board, player)

    results = [rows, cols, main_diag, sec_diag]
    for res in results:
        if res == True:
            return True
    return False

def play():
    '''play the game
    INPUT: None
    OUTPUT: None'''
    print()
    print("WELCOME TO TIC TAC TOE!")
    board = create_board()
    player = 'X'

    while True:
        if check_full(board):
            print('The board is full! This is a draw.')
            break
        elif check_win(board, player):
            print(f"Player {player} wins!")
            break
        else:
            if player == 'X':
                player = 'O'
            else:
                player = 'X'
            print_board(board)
            input_player(board, player)
    
    print("Thanks for playing!")

play()