#exercise 1

def get_full_name():
    name = input('what is your full name? ') 
    name_split = name.split() 
    print(len(name_split))
    if len(name_split) > 2:
        first_name, middle_name, last_name = name_split
        print(f'{first_name} {middle_name} {last_name}')
    else:
        first_name, last_name = name_split
        print(f'{first_name} {last_name}')
        
        
get_full_name()
    
    
#exercise 2
# Write a function that converts English text to morse code and another one that does the opposite.
# Hint: Check the internet for a translation table, every letter is separated with a space and every word is separated with a slash /.

#exercise 3

    
#exercise 4
def box_printer(*strings):
    max_length = max(len(s) for s in strings)
    border = '*' * (max_length + 4)
    print(border)
    
    for s in strings:
        print(f"* {s.ljust(max_length)} *")
    print(border)

box_printer("Hello", "World", "in", "reallylongword", "a", "frame")

