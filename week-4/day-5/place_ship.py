import pygame
import random

pygame.init() 

class Player_ships:
    def __init__(self, range_ship: int, letter, icon_picture):
        self.range_ship = range_ship
        self.letter = letter
        self.icon_picture = icon_picture
                      
    def place_player_ship(self, board, ship_dir, row, col):
        player_positions = []
        placed_successfully = False
        if ship_dir == 'H' and col + self.range_ship <= 9:
            for i in range(self.range_ship):
                board[row][col + i] = self.letter
                player_positions.append(board[row][col + i])
        elif ship_dir == 'V' and row + self.range_ship <= 9:
            for i in range(self.range_ship):
                board[row + i][col] = self.letter
                player_positions.append(board[row + i][col])
        placed_successfully == True
                            
    
class Computer_ships(Player_ships):
    def __init__(self, range_ship: int, letter, icon_picture, index):
        super().__init__(range_ship, letter, icon_picture)
        self.index = index

    def place_computer_ship(self, board):
        list_position_com = []
        ship_dir = random.choice(['H', 'V'])
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
        return ship_dir, ship_r, ship_cl
  