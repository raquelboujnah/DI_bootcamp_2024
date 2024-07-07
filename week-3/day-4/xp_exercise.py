import random
#exercise 1
# Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.
# Hint : The generated sentences do not have to make sense.
# Download this word list
# Save it in your development directory.
# Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?
# Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
# use the words list to get your random words.
# the amount of words should be the value of the length parameter.
# Take the random words and create a sentence (using a python method), the sentence should be lower case.
# Create a function called main which will:
# Print a message explaining what the program does.
# Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
# If the user inputs incorrect data, print an error message and end the program.
# If the user inputs correct data, run your code.
def get_words_from_file():
    with open("random_word.txt", "r") as file:
        content = file.readlines()
    return content
        
def get_random_sentence(length):
    sentence = random.sample(get_words_from_file(), length)
    real_sentence = ' '.join(word.strip() for word in sentence)
    return real_sentence.lower().capitalize()

def main():
    print("this program will take the user answer as a lenght for a sentence as i do below but if the number is not between 2-20 then i will raise an eror and end the program if not i will call the function below")
    user_lenght = int(input("chose a lenght between 2-20 "))
    try:
        if 2 <= user_lenght <= 20:
            print(get_random_sentence(user_lenght))
    except ValueError:
        print("lenght is not between 2-20")
        



#exercise 2

import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""
# Access the nested “salary” key from the JSON-string above.
# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
# Save the dictionary as JSON to a file.

dict1 = json.loads(sampleJson)
print(dict1['company']['employee']['payable']['salary'])
dict1['company']['employee']['birth_date'] = '22/08/2001'
with open('dict1.json', 'w') as file:
    json.dump(dict1, file)

