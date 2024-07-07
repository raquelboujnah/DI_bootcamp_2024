from place_ship import Player_ships, Computer_ships
from check_hit_win import *
import pygame


pygame.init()

WINDOW_WIDTH = 800
WINDOW_HEIGHT = 600
BORDER_WIDTH = 1
BOARD_SIZE = 9
CELL_SIZE = 50
MARGIN = 20
BOARD_ORIGIN = (MARGIN, MARGIN)

screen = pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT))
pygame.display.set_caption('BattleShip')
icon = pygame.image.load('ship.png')
pygame.display.set_icon(icon)

WHITE = (255, 255, 255)
NAVY = (0, 0, 128)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 200)

image = pygame.image.load('background.jpg')
def bk(image):
    size  = pygame.transform.scale(image, (WINDOW_WIDTH, WINDOW_HEIGHT))
    screen.blit(size, (0,0))   


resized_carrier_ship = pygame.transform.scale(pygame.image.load('carrier_ship.png'), (180, 80))
resized_battleship_ship = pygame.transform.scale(pygame.image.load('battleship_ship.png'), (180, 70))
resized_cruiser_ship = pygame.transform.scale(pygame.image.load('cruiser_ship.png'), (130, 80))
resized_submarine_ship = pygame.transform.scale(pygame.image.load('submarine_ship.png'), (80, 70))
resized_destroyer_ship = pygame.transform.scale(pygame.image.load('destroyer_ship.png'), (90, 70))


player_board = [['_']*9 for x in range(9)]
player_guess_board = [['_']*9 for x in range(9)]
computer_board = [['_']*9 for x in range(9)]
com_guess_board = [['_']*9 for x in range(9)]

board_start_x = (WINDOW_WIDTH - (BOARD_SIZE * CELL_SIZE)) // 2
board_start_y = (WINDOW_HEIGHT - (BOARD_SIZE * CELL_SIZE)) // 2

font = pygame.font.SysFont(None, 36)
small_font = pygame.font.Font(None, 24)
 

def draw_board(screen):
    for row in range(BOARD_SIZE):
        for col in range(BOARD_SIZE):
            rect = pygame.Rect(col * CELL_SIZE + board_start_x, row * CELL_SIZE + board_start_y, CELL_SIZE, CELL_SIZE)
            pygame.draw.rect(screen, WHITE, rect, BORDER_WIDTH)

    for col in range(BOARD_SIZE):
        label = font.render(chr(ord('A') + col), True, NAVY)
        label_rect = label.get_rect(center=(board_start_x + col * CELL_SIZE + CELL_SIZE // 2, board_start_y - CELL_SIZE // 2))
        screen.blit(label, label_rect)

    for row in range(BOARD_SIZE):
        label = font.render(str(row + 1), True, NAVY)
        label_rect = label.get_rect(center=(board_start_x - CELL_SIZE // 2, board_start_y + row * CELL_SIZE + CELL_SIZE // 2))
        screen.blit(label, label_rect)


def get_tile_from_mouse_pos(mouse_pos):
    x, y = mouse_pos
    if board_start_x <= x < board_start_x + BOARD_SIZE * CELL_SIZE and board_start_y <= y < board_start_y + BOARD_SIZE * CELL_SIZE:
        col = (x - board_start_x) // CELL_SIZE
        row = (y - board_start_y) // CELL_SIZE
        return row, col
    return None


def draw_text(text, font, color, surface, x, y):
    textobj = font.render(text, True, color)
    textrect = textobj.get_rect()
    textrect.topleft = (x, y)
    surface.blit(textobj, textrect)


button_font = pygame.font.Font(None, 36)
button_text = button_font.render('Done', True, WHITE)
padding = 15
text_rect = button_text.get_rect()
button_rect = pygame.Rect(0, 0, text_rect.width + padding * 2, text_rect.height + padding * 2)
button_rect.topleft = (680, 500)  

def done_button():
    if button_rect.collidepoint(pygame.mouse.get_pos()):
        pygame.draw.rect(screen, BLUE, button_rect)
    else:
        pygame.draw.rect(screen, NAVY, button_rect)
    text_x = button_rect.x + (button_rect.width - text_rect.width) // 2
    text_y = button_rect.y + (button_rect.height - text_rect.height) // 2
    screen.blit(button_text, (text_x, text_y))

   
   
def convert_pos(ship_dir, row, col):
    if ship_dir == 'H':
        BOARD_OFFSET_X = 63
        BOARD_OFFSET_Y = 185
        row_pix = BOARD_OFFSET_Y + row * CELL_SIZE
        col_pix = BOARD_OFFSET_X + col * CELL_SIZE
        return row_pix, col_pix

    elif ship_dir == 'V':
        BOARD_OFFSET_X = 85
        BOARD_OFFSET_Y = 167
        row_pix = BOARD_OFFSET_Y + row * CELL_SIZE
        col_pix = BOARD_OFFSET_X + col * CELL_SIZE
        return row_pix, col_pix

def rotate(image):
    rotated_ship_image = pygame.transform.rotate(image, -90)
    return rotated_ship_image

def create_com_object(range_ship, letter, icon_picture, index):
    ship = Computer_ships(range_ship, letter, icon_picture, index)
    ship_dir, ship_r, ship_col = ship.place_computer_ship(computer_board)
    row_pix, col_pix = convert_pos(ship_dir, ship_r, ship_col)
    return icon_picture, row_pix, col_pix, ship_dir

def create_ply_object(range_ship, letter, icon_picture, row, col, dir_kb):
    ship = Player_ships(range_ship, letter, icon_picture)
    ship.place_player_ship(player_board, dir_kb, row, col)
    return icon_picture

def convert_tile_to_pixel(row, col, ship_dir):
    if ship_dir == 'V':
        x = board_start_x + col * CELL_SIZE
        y = board_start_y + row * CELL_SIZE
    elif ship_dir == 'H':
        x = board_start_x + col * CELL_SIZE - (30 - CELL_SIZE) // 2
        y = board_start_y + row * CELL_SIZE - (90 - CELL_SIZE) // 2 
    return x, y

def show_object(ship, pix_col, pix_row, ship_dir):
    if ship_dir == 'V':
        rotated_ship = rotate(ship)
        screen.blit(rotated_ship, (pix_col, pix_row))
    elif ship_dir == 'H':
        screen.blit(ship, (pix_col, pix_row))
        

ply_list_B = []
ply_list_C = []
ply_list_D = []
ply_list_R = []
ply_list_S = []

com_list_B = []
com_list_C = []
com_list_D = []
com_list_R = []
com_list_S = []     
 
        
def ply_turns(ply_name, guess_row, guess_col):
    pos = player_turn(player_guess_board, guess_row, guess_col)
    g_guesses, is_hit = check_hit(player_guess_board, computer_board, pos, ply_name)
    count_ply = chek_if_sank(computer_board, g_guesses, ply_name, ply_list_B, ply_list_C, ply_list_D, ply_list_R, ply_list_S)
    return count_ply

#when chek_hit returns false this function will run
def com_first_turn(com_name):
    com_pos = comp_turn_fisrt_guess(com_guess_board)
    com_g_guesses, is_hit = check_hit(com_guess_board, player_board, com_pos, com_name)
    count_com = chek_if_sank(player_board, com_g_guesses, com_name, com_list_B, com_list_C, com_list_D, com_list_R, com_list_S)
    
    return is_hit, com_pos, count_com


#when chek_hit returns right this function will run and would choose a position to check around the last good guess
def com_next_turn(com_name, com_pos):
    try_pos = com_turn_check_around(com_guess_board, com_pos, com_name)
    com_g_guesses, is_hit = check_hit(com_guess_board, player_board, try_pos, com_name)
    count_com = chek_if_sank(player_board, com_g_guesses, com_name, com_list_B, com_list_C, com_list_D, com_list_R, com_list_S)

    return is_hit, try_pos, count_com


def main():
    
    run = True
    current_ship_dir = ''
    row, col = 0, 0
    ship_types = [
        ('C', resized_carrier_ship, 4, 5),  
        ('B', resized_battleship_ship, 4, 5),
        ('R', resized_cruiser_ship, 3, 6),
        ('S', resized_submarine_ship, 2, 7),
        ('D', resized_destroyer_ship, 2, 7)
    ]
    current_ship_index = 0  
    current_ship_dir = 'V' 
    ship_index_com = 0
    ship_placed = False
    game_state = "placing_ships"
    computer_ships_placed = False 
    count_sank_ply = 0
    count_sank_com = 0
    player_num_turns = 0
    com_name = 'ezra'
    ply_name = 'Raquel'
    message = ''

    
    while run:
        
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False
            
            if game_state == "placing_ships":
                if event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_h:
                        current_ship_dir = 'H'
                    elif event.key == pygame.K_v:
                        current_ship_dir = 'V'
                elif event.type == pygame.MOUSEBUTTONDOWN:
                    mouse_pos = pygame.mouse.get_pos()
                    tile = get_tile_from_mouse_pos(mouse_pos)
                    if tile:
                        if not ship_placed:
                            row, col = tile
                            ship_to_place = ship_types[current_ship_index][1]
                            ship_range = ship_types[current_ship_index][2]
                            ship = create_ply_object(ship_range, ship_types[current_ship_index][0], ship_to_place, row, col, current_ship_dir)
                            pix_col, pix_row = convert_tile_to_pixel(row, col, current_ship_dir)
                            show_object(ship, pix_col, pix_row, current_ship_dir)
                            ship_placed = True
                        pygame.display.flip()

                    elif button_rect.collidepoint(mouse_pos):
                        if ship_placed:
                            current_ship_index += 1
                            ship_placed = False
                            if current_ship_index >= len(ship_types):
                                game_state = "gameplay"  # Transition to gameplay state


            elif game_state == "gameplay":
                if not computer_ships_placed:
                    for ship in ship_types:
                        ship_to_place = ship[1]
                        ship_range = ship[2]
                        ship_index_com = ship[3]

                        ship = create_com_object(ship_range, ship[0], ship_to_place, ship_index_com)

                    print(computer_board)
                    computer_ships_placed = True

                if event.type == pygame.MOUSEBUTTONDOWN:
                    mouse_pos = pygame.mouse.get_pos()
                    tile = get_tile_from_mouse_pos(mouse_pos)
                    if tile:
                        guess_row, guess_col = tile
                    count_ply = ply_turns(ply_name, guess_row, guess_col)
                    player_num_turns += 1
                    is_hit, com_pos, count_com = com_first_turn(com_name)
                    while count_sank_com < 5 and count_sank_com < 5:
                        count_ply = ply_turns(ply_name, guess_row, guess_col)
                        count_sank_ply += count_ply 
                        player_num_turns += 1
                        is_hit, com_pos, count_com = com_next_turn(com_name, com_pos)
                        message = f'{ply_name} has sank already {count_sank_ply} ships'
                        if count_sank_ply == 5:
                            message = f'Congratulations, Admiral {ply_name}! You have sunk all of your enemy ships.'
                            break
                        if is_hit:
                            try:
                                is_hit, com_pos, count_com = com_next_turn(com_name, com_pos)
                            except IndexError:
                                is_hit, com_pos, count_com = com_first_turn(com_name)
                        else:
                            is_hit, com_pos, count_com = com_first_turn(com_name)
                        count_sank_com += count_com
                        message = f'{com_name} has sank already {count_sank_com} ships'
                        if count_sank_com >= 5:
                            message = f'Game Over! {com_name} has sunk all of your ships.'
                            break


            if game_state == "placing_ships":
                draw_board(screen)
                done_button()
                draw_text('Place your ships', font, WHITE, screen, 300, 7)
                draw_text('Press H for horizontal, V for vertical', small_font, WHITE, screen, 250, 535)
                draw_text('Click on a tile to place the ship', small_font, WHITE, screen, 270, 555)
                draw_text("Click 'Done' to place the next ship.", small_font, WHITE, screen, 260, 575)
                done_button()
             
            elif game_state == "gameplay":
                screen.fill((0, 0, 0))
                draw_board(screen)
                draw_text('Gameplay phase', font, WHITE, screen, 300, 7)
                draw_text('Click on a tile to guess.', small_font, WHITE, screen, 270, 555)
                draw_text(message, small_font, WHITE, screen, 300, 580)

                done_button()
               

            
            

        
        pygame.display.flip()
    pygame.quit()
        
main()


