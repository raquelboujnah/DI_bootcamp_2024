secret = [['7', 'i', '3'],
 ['T', 's', 'i'],
 ['h', '%', 'x'],
 ['i', ' ', '#'],
 ['s', 'M', ' '],
 ['$', 'a', ' '],
 ['#', 't', '%'],
 ['^', 'r', '!']]


def decode() :
    final = ""
    for char in secret :
            if str(char).isalpha() :
                    final += char
            else :
                final += " "
    print(final)

decode()
    
