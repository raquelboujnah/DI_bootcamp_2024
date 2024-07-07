from anagram_checker import AnagramChecker

def show_menu():
    user_word = input('choose a word or enter "exit" ')
    return user_word

def anylise_word(user_word):
    if len(user_word.split(" ")) > 1:
        raise Exception('please enter only one word')
    else:
        user_word_no_space = user_word.replace(" ", "")
        if user_word_no_space.isalpha():
            return True

def main():
    text = AnagramChecker('words_file.txt')
    user_word = ''
    while user_word != "EXIT":
        user_word = show_menu().upper()
        try:
            anylise_word(user_word)
            if text.is_a_valid_word(user_word) == True:
                text.get_anagrams(user_word)
                print(f"Your word: {user_word}\nThis is a valid word in English\nAnagram for your word:{' '.join(text.get_anagrams(user_word))}")
            else:
                print('your word is not in english')
                show_menu()
        except:
            user_word = show_menu().upper()
            
  
main()    
    
    
        
    