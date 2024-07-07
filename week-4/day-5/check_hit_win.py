import random

list_column = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
list_row = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let_to_num = {'A':0,'B':1,'C':2,'D':3,'E':4,'F':5,'G':6,'H':7, 'I':8} 

 
def player_turn(board, ply_guess_r, ply_guess_c): 
    board[ply_guess_r][ply_guess_c] = '-'
    return (ply_guess_r, ply_guess_c)

def comp_turn_fisrt_guess(board):
    while True:
        com_guess_r, com_guess_c = random.randint(0, 8), random.randint(0, 8)
        if board[com_guess_r][com_guess_c] == '_':
            board[com_guess_r][com_guess_c] = '-'
        return (com_guess_r, com_guess_c)


def com_turn_check_around(board, com_pos, name):
    around_possibilities = []
    r, c = com_pos
    if r - 1 >= 0 and board[r - 1][c] == '_':
        around_possibilities.append((r - 1, c))
    if c + 1 < 9 and board[r][c + 1] == '_':
        around_possibilities.append((r, c + 1))
    if r + 1 < 9 and board[r + 1][c] == '_':
        around_possibilities.append((r + 1, c))
    if c - 1 >= 0 and board[r][c - 1] == '_':
        around_possibilities.append((r, c - 1))
        
    com_try_around = random.choice(around_possibilities)
    try_r, try_c = com_try_around
    board[try_r][try_c] = '-'
    
    for key, val in let_to_num.items():
        if val == try_c:
            try_c_let = key
            break 
        
    print(f'{name} launched a missile at place: {try_r + 1}, {try_c_let}')

    return (try_r, try_c)


def check_hit(board_ply, board2, ply_pos, name):
    good_guesses = []
    r, c = ply_pos
    if board2[r][c] != '_':
        print(f'{name} hit a ship!')
        board_ply[r][c] = '*'
        good_guesses.append((r, c))
        return good_guesses, True
    else:
        print(f'{name} missed {ply_pos}')
        return good_guesses, False
        

def chek_if_sank(board, g_guesses, name, list_B: list, list_C: list, list_D: list, list_R: list, list_S: list):
    for pos in g_guesses:
        if board[pos[0]][pos[1]] == 'B':
            list_B.append(pos)
        elif board[pos[0]][pos[1]]== 'C':
            list_C.append(pos)
        elif board[pos[0]][pos[1]] == 'D':
            list_D.append(pos)
        elif board[pos[0]][pos[1]] == 'R':
            list_R.append(pos)
        elif board[pos[0]][pos[1]] == 'S':
            list_S.append(pos)
    
    if len(list_B) == 4:
        print(f'{name} sank the Battleship')
        list_B.clear()
        return 1
    elif len(list_C) == 4:
        print(f'{name} sank the Carrier')
        list_C.clear()
        return 1
    elif len(list_R) == 3:
        print(f'{name} sank the Cruiser')
        list_R.clear()
        return 1
    elif len(list_D) == 2:
        print(f'{name} sank the Destroyer')
        list_D.clear()
        return 1
    elif len(list_S) == 2:
        print(f'{name} sank the Submarine')
        list_S.clear()
        return 1
    else:
        return 0