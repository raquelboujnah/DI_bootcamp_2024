# exercise 2
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

def display_message():
    print('i am learning python')
    

# exercise 2
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.

def favorite_book(title):
    print(f'One of my favorite books is {title}')

favorite_book(title)

# exercise 3
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.

def describe_city(city, "isarel"):
    print(f'{city} is in {contry}')
    
describe_city(city)

#exercise 4
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.
import random

def number(user_number):
    random_number == random.randint(1, 100)
    if user_number = random_number:
        print('you both choose the same number!')
    else:
        print(f"computer's choice:{random_number} your choice:{user_number}")
        
number(user_number))

#exercise 5
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Call the function, in order to make a large shirt with the default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.

# Bonus: Call the function make_shirt() using keyword arguments.

def make_shirt(size , text'):
    print(f'The size of the shirt is {size} and the text is {text}')

make_shirt('m', 'hello')
make_shirt()
make_shirt("medium")
make_shirt("small", "python is cool")

#exercise 6
# Using this list of magician’s names
# Create a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians():
    for name in magician_names:
        print(name)
        
def make_great():
    for name in magician_names:
       print(magician_names + " the great")
        
        
make_great()
show_magicians()

#exercise 7
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.
# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”
# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40

# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().

# Bonus: Give the temperature as a floating-point number instead of an integer.
# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

def get_random_temp(season):
    if 1 <= season <= 4:
       random_temp = round(random.uniform(-10, 16),2)
    elif 5 <= season <= 7:
        random_temp = round(random.uniform(17, 23),2) 
    elif 8 <= season <= 10:
         random_temp = round(random.uniform(24, 32),2)
    elif 11 <= season <= 12:
         random_temp = round(random.uniform(33, 40),2)
    
    return random_temp

def main():
    random_temp = get_random_temp(input("in which month are we type a number between 1-12"))
    print(f'The temperature right now is {random_temp} degrees Celsius')
    if random_temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today")
    elif 0 <= 16 == random_temp :
        print("Quite chilly! Don't forget your coat")
    elif 17 <= 23 == random_temp :
        print("maybe bring a small jacket with you just in case")
    elif 24 <= 32 == random_temp :
        print("the summer is here!!!")
    else : 
        print("better for you to stay at home today")
    
main()

#exercise 8
star_wars = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def question_user():
    wrong_answer = 0
    good_answer = 0
    wrong_answer_list = []
    print("--------The quiz starts--------")
    for quiz in star_wars:
        print(quiz["question"])
        user_answer = input("what is your answer?\n")
        if user_answer ! quiz["answer"]:
           wrong_answer + 1 
           quiz["wrong_answer_user"] = user_answer
           wrong_answer_list.append(quiz)
        else:
            good_answer += 1
    
    quiz_result() 


def quiz_result():
    print("\n-----------------------")
    print(f"You have done {good} correct answer")
    print(f"You have done {wrong} wrong answer")
    for quest in list_:
        print(f"In the question {question} your answer was {wrong_answer_user} but the correct answer was {answer}")
        
    print("\n-----------------------")
    if wrong > 3:
        print("You've done more that 3 mistakes try again to improve your knowleg in star wars")
        question_user()
    else:
        print("Good job")
        question_user()

question_user()
      
      
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

#The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
#We need to prepare the orders of the clients:
#Create an empty list called finished_sandwiches.
#One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
#After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
while "Pastrami sandwich":
    sandwich_orders.remove("Pastrami sandwich")
#print(sandwich_orders)

finished_sandwiches =[]

while sandwich_orders:
    current_sandwich = sandwich_orders.pop()
    print("I made a " + current_sandwich)
    finished_sandwiches.add(current_sandwich)
print()
for finished_sandwich in finished_sandwiches:
    print(finished_sandwich.title() " is done")
