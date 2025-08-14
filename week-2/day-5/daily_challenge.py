#challenge 1
def reverse():
    user_input = input("write a comma separated sequence of words ")
    lst_input = user_input.split(',')
    lst_input.sort()
    print(" ".join(lst_input))
reverse()

#challenge 2

def longuest():
    sentence = input('write a sentence ')
    lst_sentence = sentence.split()
    longuest_word = max(lst_sentence, key=len)
    print(longuest_word)   
longuest()
