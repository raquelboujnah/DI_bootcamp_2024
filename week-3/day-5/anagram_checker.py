import itertools
# The class should have the following methods:
# __init__ - should load the word list file (text file) into a variable, so that it can be searched later on in the code.
# is_valid_word(word) – should check if the given word (ie. the word of the user) is a valid word.
# get_anagrams(word) – should find all anagrams for the given word. (eg. if word of the user is ‘meat’, the function should return a list containing [“mate”, “tame”, “team”].)
# Hint: you might want to create a separate method called is_anagram(word1, word2), that will compare 2 words and return True if they contain the same letters (but not in the same order), and False if not.
# Note: None of the methods in the class should print anything.
# Now create another Python file, called anagrams.py. This will contain all the UI (user interface) functionality of your program, and will rely on AnagramChecker for the anagram-related logic.
class AnagramChecker:
    
    def __init__(self, words_file):
        with open(words_file, "r") as word_file:
            read = word_file.read()
            self.text = read.split()
    
    def is_a_valid_word(self, word):
        big_word = word
        if big_word in self.text:
            return True
        else:
            return False
    
    def get_anagrams(self, word):
        permutations = []
        for p in itertools.permutations(word):
            perm = ''.join(p)
            permutations.append(perm)
        
        for perm in permutations:
            if perm == word:
                permutations.remove(perm)
        
        list_anagram = []
        for option in permutations:
            if option in self.text:
                list_anagram.append(option)
                
        return list_anagram
    

                    
        
    