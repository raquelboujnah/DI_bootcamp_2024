def how_much():
    sentence = input('enter a string')
    char = input('enter a letter')
    sentence_list = ''.join(sentence)
    print(sentence_list)
    count = 0
    for letter in sentence_list:
        if letter == char:
            count += 1
    print(count)
    
how_much()