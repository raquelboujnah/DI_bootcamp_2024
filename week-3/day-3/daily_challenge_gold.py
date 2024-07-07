def ask_5():
    user_name = input('choose a name')
    user_age = int(input('choose an age'))
    user_score = int(input('choose a score'))
    return user_name, user_age, user_score


all_choices = []
for user_choice in range(5):
    user_choice = ask_5()
    user_choice_tuple = tuple(user_choice)
    all_choices.append(user_choice_tuple)
    
print(all_choices)