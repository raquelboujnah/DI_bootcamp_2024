from collections import Counter

# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”
# Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code
# Implement the following methods:
# a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
# a method that returns the most common word in the text.
# a method that returns a list of all the unique words in the text.
# # Part II
# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.
# Implement a classmethod that returns a Text instance but with a text file:
#     >>> Text.from_file('the_stranger.txt')
# Hint: You need to open and read the text from the text file.
# Now, use the provided the_stranger.txt file and try using the class you created above.

class Text:
    def __init__(self, text):
        self.text = text
    
    def frequency(self, word):
        list_text = self.text.split(' ')
        word_counter = Counter(list_text)
        print(word_counter[word])
    
    def most_commun(self):
        list_text = self.text.split(' ')
        word_counter = Counter(list_text)
        most_commun = max(zip(word_counter.values(), word_counter.keys()))[1]
        print(most_commun)
    
    def all_unique(self):
        all_unique = []
        list_text = self.text.split(' ')
        word_counter = Counter(list_text)
        for key, value in word_counter.items():
            if value == 1:
                all_unique.append(key) 
            else:
                continue
        print(all_unique)

text = Text('A good book would sometimes cost as much as a good house'.lower())

with open('the_stranger.txt', 'r') as file:
    text1 = file.read()
    
text2 = Text(text1.lower())
text2.frequency('the')
text2.most_commun()
text2.all_unique()   


    






# Bonus:
# Create a class called TextModification that inherits from Text.
# Implement the following methods:
# a method that returns the text without any punctuation.
# a method that returns the text without any english stop-words (check out what this is !!).
# a method that returns the text without any special characters.
# Note: Instead of creating a child class, you could also implements those methods as static methods in the Text class.
# Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative :)