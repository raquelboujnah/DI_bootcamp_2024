#exercise-4
my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
print(len(my_text))

#exercise-5
previous_sentence = ""
prompt = "try to write the longuest sentence you can without using the letter a. type 'quit' if you want to guit the game\n"
while True:
    user_sentence = input(prompt)
    if "a" in user_sentence:
        print("wrong answer")
        prompt = ("try again\n")
        
    elif len(user_sentence) > len(previous_sentence):
        previous_sentence = user_sentence
        print("congrats great job")
        prompt = "try an even longer sentence\n" 
        
    elif user_sentence == "quit":
        break
    
