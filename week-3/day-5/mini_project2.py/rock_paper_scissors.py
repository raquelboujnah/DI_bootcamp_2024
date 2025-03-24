from game import Game

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
            
            