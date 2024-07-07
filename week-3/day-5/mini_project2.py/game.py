import random
# game.py – this file/module should contain a class called Game. It should have 4 methods:
# get_user_item(self) – Ask the user to select an item (rock/paper/scissors). Keep asking until the user has selected one of the items – use data validation and looping. Return the item at the end of the function.
# get_computer_item(self) – Select rock/paper/scissors at random for the computer. Return the item at the end of the function. Use python’s random.choice() function (read about it online).
# get_game_result(self, user_item, computer_item) – Determine the result of the game.
# Parameters:
# user_item – the user’s chosen item (rock/paper/scissors)
# computer_item – the computer’s chosen (random) item (rock/paper/scissors)
# Return either win, draw, or loss. Where win means that the user has won, draw means the user and the computer got the same item, and loss means that the user has lost.
# play(self) – the function that will be called from outside the class (ie. from rock-paper-scissors.py). It will do 3 things:
# Get the user’s item (rock/paper/scissors) and remember it
# Get a random item for the computer (rock/paper/scissors) and remember it
# Determine the results of the game by comparing the user’s item and the computer’s item
# Print the output of the game; something like this: “You selected rock. The computer selected paper. You lose”, “You selected scissors. The computer selected scissors. You drew!”
# Return the results of the game as a string: win;draw;loss;, where win means that the user has won, draw means the user and the computer got the same item, and loss means that the user has lost.
class Game:
    
    def get_user_item(self):
        list_choice = ['r', 'p', 's']
        user_item = ''
        while user_item not in list_choice:
            user_item = input('choose between rock(r), paper(p) and scissors(s)')
        return user_item
    
    def get_comp_item(self):
        list_choice = ['r', 'p', 's']
        comp_item = random.choice(list_choice)
        return comp_item
    
    def get_game_result(self, user_item, comp_item):
        if user_item == 'r' and comp_item == 's' or user_item == 's' and comp_item == 'p' or user_item == 'p' and comp_item == 'r':
            return 'won'
        elif comp_item == 'r' and user_item == 's' or comp_item == 's' and user_item == 'p' or comp_item == 'p' and user_item == 'r':
            return 'lost'
        elif comp_item == user_item:
            return 'drew'
        
    def play(self):
        user_item = self.get_user_item()
        comp_item = self.get_comp_item()
        result = self.get_game_result(user_item, comp_item)
        print(f'you select {user_item} and the computer select {comp_item}, you {result}')
        return result

    
    