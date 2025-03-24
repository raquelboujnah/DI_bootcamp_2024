# exercise 1
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

my_fav_numbers = {2, 4, 56, 32, 22}
print(my_fav_numbers)
my_fav_numbers.update({44, 66})
print(my_fav_numbers)
my_fav_numbers = list(my_fav_numbers)
my_fav_numbers.pop()
my_fav_numbers = set(my_fav_numbers)
print(my_fav_numbers)
friend_fav_numbers = {34, 78, 5, 98, 9}
our_fav_numbers = friend_fav_numbers.union(my_fav_numbers)
print(our_fav_numbers)

# exercise 2
# Given a tuple which value is integers, is it possible to add more integers to the tuple?
# No but you can add a tuplle with another tuple to create a new tuple including those two

# exercise 3
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];
# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
count_apple = basket.count("Apples")
print(count_apple)
basket.clear()
print(basket)

# exercise 4
# Recap – What is a float? What is the difference between an integer and a float?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# Can you think of another way to generate a sequence of floats?

# a float is a number that has a decimal point like 1.5 or 5.2 and an integer is a whole number
list_a = []
number = 1
for i in range(8):
    number += 0.5
    list_a.append(number)
print(list_a)

#arange()

# exercise 5 
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

for i in range(1, 21):
    print(i)

for i in range(1, 21):
    if i % 2 == 0:
        print(i)

# exercise 6
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.
# name = "Raquel"
# user_name = ""
# while user_name != name:
#     input("what is your name? ")
#     break

# exercise 7
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

# fav_fruit = input("what are your favorite fruits? Separate them with a space")
# list_fruit = fav_fruit.split()
# print(list_fruit)
# random_fruit = input("input a name of any fruit ")


# if random_fruit in list_fruit:
#     print("You chose one of your favorite fruits! Enjoy!")
# else:
#     print("You chose a new fruit. I hope you enjoy")

# exercise 8
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

# user_input = ""
# total_tops = []
# while user_input != "quit":
#     user_input = input("choose a topping for your pizza or type quit")
#     if user_input != "quit":
#         print(f"I’ll add {user_input} to your pizza")
#         total_tops.append(user_input)
#     else:
#         total_tops_str = ", ".join(total_tops)
#         print(f"your topping are: {total_tops_str}. Your pizza will cost {len(total_tops) * 2.5 + 10}")
#         break


#exercise 9
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
# Ask a family the age of each person who wants a ticket.
# Store the total cost of all the family’s tickets and print it out.
# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

# total_cost = 0
# user_input = ""
# while user_input != 0:
#     user_input = int(input("How old are you? "))
#     if user_input < 3:
#         total_cost += 0
#     elif 3 <= user_input <= 12:
#         total_cost += 10
#     elif user_input > 12:
#         total_cost += 15

# print(f"your total cost is {total_cost}")

# user_name = ""
# names = []
# while user_name != "quit":
#     user_name = input("what is your name? or type quit ")
#     names.append(user_name)
#     user_age = int(input("How old are you? "))
#     if 16 <= user_age <= 21:
#         names.remove(user_name)
#     else:
#         continue
# names.pop()
# print(names)


#exercise 10
# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove( "Pastrami sandwich")
    print(sandwich_orders)

finished_sandwiches = []
while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(current_sandwich)
    
for i in finished_sandwiches:
    print(f"I made your {i}")

my_name='olga'
user_name=input('please enter your name:')

if my_name==user_name: print('cool, we have the same name')
else: print('walla, you have a very unusual name')