import pygame
import random


# Initialize Pygame
pygame.init()

# Screen dimensions
SCREEN_WIDTH, SCREEN_HEIGHT = 800, 600
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Battleship Game")

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
BLUE = (0, 0, 255)
RED = (255, 0, 0)
GRAY = (128, 128, 128)
GREEN = (0, 255, 0)

# Grid dimensions
GRID_SIZE = 9
CELL_SIZE = 40
MARGIN = 20
BOARD_ORIGIN = (MARGIN, MARGIN)

# Fonts
FONT = pygame.font.SysFont("Arial", 20)

direction = ['H', 'V']
let_to_num = {'A':0,'B':1,'C':2,'D':3,'E':4,'F':5,'G':6,'H':7, 'I':8}
num_to_let = {v: k for k, v in let_to_num.items()}

class Player_ships:
    def __init__(self, ship_name, range_ship: int, icon_picture):
        self.ship_name = ship_name
        self.range_ship = range_ship
        self.icon_picture = icon_picture
                
    def create_player_ship(self, board, name):
        player_positions = []
        placed_successfully = False
        direction = 'H'  # Default direction for placement

        while not placed_successfully:
            ply_shp_dir = direction  # Direction is always 'H' for now
            print(f'Admiral {name}, choose a place for your {self.ship_name} this ship takes {self.range_ship} boxes')

            ply_shp_r, ply_shp_c_idx = self.get_mouse_click()
            ply_shp_r -= 1

            try:
                if ply_shp_dir == 'V':
                    if all(board[ply_shp_r + i][ply_shp_c_idx] == '_' for i in range(self.range_ship)):
                        for i in range(self.range_ship):
                            board[ply_shp_r + i][ply_shp_c_idx] = self.letter
                            player_positions.append((ply_shp_r + i, ply_shp_c_idx))
                        placed_successfully = True
                    else:
                        print("That spot is already occupied. Try again.")

                if ply_shp_dir == 'H':
                    if all(board[ply_shp_r][ply_shp_c_idx + i] == '_' for i in range(self.range_ship)):
                        for i in range(self.range_ship):
                            board[ply_shp_r][ply_shp_c_idx + i] = self.letter
                            player_positions.append((ply_shp_r, ply_shp_c_idx + i))
                        placed_successfully = True
                    else:
                        print("That spot is already occupied. Try again.")
            except IndexError:
                print('Your boat is out of the map')

        return player_positions

    

class Computer_ships(Player_ships):
    def __init__(self, ship_name, range_ship: int, letter, index):
        super().__init__(ship_name, range_ship, letter)
        self.index = index

    def create_computer_ships(self, board):
        list_position_com = []
        ship_dir = random.choice(direction)
        if ship_dir == 'V':
            while True:
                ship_r, ship_cl = random.randint(0, self.index), random.randint(0, 8)
                if all(board[ship_r + i][ship_cl] == '_' for i in range(self.range_ship)):
                    for i in range(self.range_ship):
                        board[ship_r + i][ship_cl] = self.letter
                        list_position_com.append((ship_r + i, ship_cl))
                    break
        elif ship_dir == 'H':
            while True:
                ship_r, ship_cl = random.randint(0, 8), random.randint(0, self.index)
                if all(board[ship_r][ship_cl + i] == "_" for i in range(self.range_ship)):
                    for i in range(self.range_ship):
                        board[ship_r][ship_cl + i] = self.letter
                        list_position_com.append((ship_r, ship_cl + i))
                    break
        return list_position_com

def draw_grid(board, offset_x=0, offset_y=0):
    for row in range(GRID_SIZE):
        for col in range(GRID_SIZE):
            color = WHITE
            if board[row][col] == 'X' or board[row][col] == 'K' or board[row][col] == 'D' or board[row][col] == 'O' or board[row][col] == 'H':
                color = GREEN
            elif board[row][col] == '*':
                color = RED
            elif board[row][col] == '-':
                color = GRAY
            pygame.draw.rect(screen, color,
                             [(MARGIN + CELL_SIZE) * col + MARGIN + offset_x,
                              (MARGIN + CELL_SIZE) * row + MARGIN + offset_y,
                              CELL_SIZE, CELL_SIZE])
            pygame.draw.rect(screen, BLACK,
                             [(MARGIN + CELL_SIZE) * col + MARGIN + offset_x,
                              (MARGIN + CELL_SIZE) * row + MARGIN + offset_y,
                              CELL_SIZE, CELL_SIZE], 1)

def draw_text(text, pos):
    label = FONT.render(text, True, BLACK)
    screen.blit(label, pos)

def main():
    clock = pygame.time.Clock()
    running = True

    # Create boards
    player_board = [['_']*GRID_SIZE for _ in range(GRID_SIZE)]
    computer_board = [['_']*GRID_SIZE for _ in range(GRID_SIZE)]
    player_guess_board = [['_']*GRID_SIZE for _ in range(GRID_SIZE)]
    com_guess_board = [['_']*GRID_SIZE for _ in range(GRID_SIZE)]

    ply_name, com_name = "Player", "Computer"

    ship1_ply = Player_ships("Carrier", 4, 'X')
    ship2_ply = Player_ships('Battleship', 4, 'K')
    ship3_ply = Player_ships('Cruiser', 3, 'D')
    ship4_ply = Player_ships('Submarine', 2, 'O')
    ship5_ply = Player_ships('Destroyer', 2, 'H')

    # print_board(player_board)
    # ship1_ply.create_player_ship(player_board, ply_name)
    # print_board(player_board)
    # ship2_ply.create_player_ship(player_board, ply_name)
    # print_board(player_board)
    # ship3_ply.create_player_ship(player_board, ply_name)
    # print_board(player_board)
    # ship4_ply.create_player_ship(player_board, ply_name)
    # print_board(player_board)
    # ship5_ply.create_player_ship(player_board, ply_name)
    # print_board(player_board)

    ship1_com = Computer_ships("Carrier", 4, 'X', 5)
    ship2_com = Computer_ships('Battleship', 4, 'K', 5)
    ship3_com = Computer_ships('Cruiser', 3, 'D', 6)
    ship4_com = Computer_ships('Submarine', 2, 'O', 7)
    ship5_com = Computer_ships('Destroyer', 2, 'H', 7)

    ship1_com.create_computer_ships(computer_board)
    ship2_com.create_computer_ships(computer_board)
    ship3_com.create_computer_ships(computer_board)
    ship4_com.create_computer_ships(computer_board)
    ship5_com.create_computer_ships(computer_board)

    while running:
        screen.fill(BLUE)

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            if event.type == pygame.MOUSEBUTTONDOWN:
                # Handle player











# Initialize Pygame
pygame.init()

# Screen dimensions
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Battleship Game")

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
BLUE = (0, 0, 255)
RED = (255, 0, 0)
GRAY = (128, 128, 128)
GREEN = (0, 255, 0)

# Grid dimensions
GRID_SIZE = 9
CELL_SIZE = 40
MARGIN = 20
BOARD_ORIGIN = (MARGIN, MARGIN)

# Fonts
FONT = pygame.font.SysFont("Arial", 20)

# Direction options for ship placement
directions = ['H', 'V']

# Converts letter to corresponding number index
let_to_num = {'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8}

# Converts number index to corresponding letter
num_to_let = {v: k for k, v in let_to_num.items()}


class Player:
    def __init__(self, name):
        self.name = name
        self.board = [['_' for _ in range(GRID_SIZE)] for _ in range(GRID_SIZE)]
        self.guess_board = [['_' for _ in range(GRID_SIZE)] for _ in range(GRID_SIZE)]

    def place_ships(self):
        ships = [
            ('Carrier', 5, 'X'),
            ('Battleship', 4, 'K'),
            ('Cruiser', 3, 'D'),
            ('Submarine', 3, 'O'),
            ('Destroyer', 2, 'H')
        ]

        for ship_name, ship_size, ship_letter in ships:
            placed_successfully = False
            while not placed_successfully:
                print(f"{self.name}, place your {ship_name} ({ship_size} cells)")

                # Choose starting position
                start_pos = self.get_mouse_click()

                # Choose direction
                direction = random.choice(directions)

                # Validate and place the ship
                try:
                    if direction == 'V':
                        if all(self.board[start_pos[0] + i][start_pos[1]] == '_' for i in range(ship_size)):
                            for i in range(ship_size):
                                self.board[start_pos[0] + i][start_pos[1]] = ship_letter
                            placed_successfully = True
                        else:
                            print("Cannot place ship there. Try again.")
                    elif direction == 'H':
                        if all(self.board[start_pos[0]][start_pos[1] + i] == '_' for i in range(ship_size)):
                            for i in range(ship_size):
                                self.board[start_pos[0]][start_pos[1] + i] = ship_letter
                            placed_successfully = True
                        else:
                            print("Cannot place ship there. Try again.")
                except IndexError:
                    print("Invalid placement. Try again.")

    def get_mouse_click(self):
        while True:
            for event in pygame.event.get():
                if event.type == pygame.MOUSEBUTTONDOWN:
                    pos = pygame.mouse.get_pos()
                    col = (pos[0] - MARGIN) // (CELL_SIZE + MARGIN)
                    row = (pos[1] - MARGIN) // (CELL_SIZE + MARGIN)
                    if 0 <= col < GRID_SIZE and 0 <= row < GRID_SIZE:
                        return row, col

    def draw_board(self):
        for row in range(GRID_SIZE):
            for col in range(GRID_SIZE):
                color = WHITE
                if self.guess_board[row][col] == '*':  # Hit
                    color = RED
                elif self.guess_board[row][col] == '-':  # Miss
                    color = GRAY
                elif self.board[row][col] != '_':  # Ship
                    color = GREEN

                pygame.draw.rect(screen, color,
                                 [(MARGIN + CELL_SIZE) * col + MARGIN,
                                  (MARGIN + CELL_SIZE) * row + MARGIN,
                                  CELL_SIZE, CELL_SIZE])

                pygame.draw.rect(screen, BLACK,
                                 [(MARGIN + CELL_SIZE) * col + MARGIN,
                                  (MARGIN + CELL_SIZE) * row + MARGIN,
                                  CELL_SIZE, CELL_SIZE], 1)

    def draw_text(self, text, pos):
        label = FONT.render(text, True, BLACK)
        screen.blit(label, pos)


class Computer(Player):
    def __init__(self):
        super().__init__("Computer")

    def place_ships(self):
        ships = [
            ('Carrier', 5, 'X'),
            ('Battleship', 4, 'K'),
            ('Cruiser', 3, 'D'),
            ('Submarine', 3, 'O'),
            ('Destroyer', 2, 'H')
        ]

        for ship_name, ship_size, ship_letter in ships:
            placed_successfully = False
            while not placed_successfully:
                # Randomly generate starting position and direction
                start_pos = (random.randint(0, GRID_SIZE - 1), random.randint(0, GRID_SIZE - 1))
                direction = random.choice(directions)

                try:
                    if direction == 'V':
                        if all(self.board[start_pos[0] + i][start_pos[1]] == '_' for i in range(ship_size)):
                            for i in range(ship_size):
                                self.board[start_pos[0] + i][start_pos[1]] = ship_letter
                            placed_successfully = True
                    elif direction == 'H':
                        if all(self.board[start_pos[0]][start_pos[1] + i] == '_' for i in range(ship_size)):
                            for i in range(ship_size):
                                self.board[start_pos[0]][start_pos[1] + i] = ship_letter
                            placed_successfully = True
                except IndexError:
                    continue

    def make_guess(self, opponent):
        while True:
            row = random.randint(0, GRID_SIZE - 1)
            col = random.randint(0, GRID_SIZE - 1)
            if opponent.guess_board[row][col] == '_':
                return row, col


def main():
    clock = pygame.time.Clock()
    running = True

    # Create players
    player = Player("Player")
    computer = Computer()

    # Place ships for both players
    player.place_ships()
    computer.place_ships()

    # Game loop
    while running:
        screen.fill(BLUE)

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        # Draw player's board
        player.draw_board()

        # Update display
        pygame.display.flip()

        # Limit frames per second
        clock.tick(60)

    # Quit pygame
    pygame.quit()


if __name__ == "__main__":
    main()
