from game import Game
# rock-paper-scissors.py : create 3 functions
# get_user_menu_choice() - this should display a simple menu, get the user’s choice (with data validation), and return the choice. No looping should occur here.
# The possibles choices are : Play a new game or Show scores or Quit
# print_results(results) – this should print the results of the games played. It should have a single parameter named results; which will be a dictionary of the results of the games played. It should display these results in a user-friendly way, and thank the user for playing.
# Note: results should be in this form: {win: 2,loss: 4,draw: 3}. Bear in mind that this dictionary will need to be created and populated in some other part of our code, and passed in to the print_results function at the right time.
# main() - the main function. It should take care of 3 things:
# Displaying the menu repeatedly, until the user types in the value to exit the program: ‘x’ or ‘q’, whatever you decide. (Make use of the get_user_menu_choice function)
# When the user chooses to play a game:
# Create a new Game object (see below), and call its play() function, receiving the result of the game that is returned.
# Remember the results of every game that is played.
# When the user chooses to exit the program, call the print_results function in order to display a summary of all the games played.

def get_user_menu_choices():
    user_choice_menu = input('play a new game(p) \nshow score and exit(s) ')
    return user_choice_menu

def print_result(total_result = {}):
    print('the scores are:')
    for key, value in total_result.items():
        print(f'{key} : {value}')
    print('thank you for playing')

def main():
    total_result = {'won': 0, 'lost': 0, 'drew': 0}
    user_choice_menu = ''
    while user_choice_menu not in ['p', 's']:
        user_choice_menu = get_user_menu_choices()
        while user_choice_menu == 'p':
            if user_choice_menu != 's':
                game = Game()
                result = game.play()
                total_result[result] += 1
                user_choice_menu = get_user_menu_choices() 
            elif user_choice_menu == 's':
                print_result(total_result)
                break
            
main()
            
            