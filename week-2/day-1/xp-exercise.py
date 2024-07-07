# exercise 1
# Print the following output in one line of code:
# Hello world
# Hello world
# Hello world
# Hello world

print("Hello world\n" * 4)


#exercise 2
#Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).

result = (99 ** 3) * 8
print(result)


#exercise 3
# Predict the output of the following code snippets:
# >>> 5 < 3
# >>> 3 == 3
# >>> 3 == "3"
# >>> "3" > 3
# >>> "Hello" == "hello"

False
True
False
TypeError
False

# #exercise-4
#Create a variable called computer_brand which value is the brand name of your computer.
#Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

computer_brand = "hp"
print(f"i have a {computer_brand} computer")

# #exercise-5
# Create a variable called name, and set it’s value to your name.
# Create a variable called age, and set it’s value to your age.
# Create a variable called shoe_size, and set it’s value to your shoe size.
# Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
# Have your code print the info message.
# Run your code

name = "Raquel"
age = 22
shoe_size = 37
info = f"my name is {name} i am {age} years old and my shoe size is {shoe_size}"
print(info)

#exercise-6
# Create two variables, a and b.
# Each variable value should be a number.
# If a is bigger then b, have your code print Hello World.

a = 22
b = 33

if a >= b:
    print("hello world")
    
#exercise-7
#Write code that asks the user for a number and determines whether this number is odd or even.

user_number = int(input("choose a number\n"))
if user_number % 2== 0:
    print("the number you chose is even")
else:
    print("the number you chose is odd")
    
# #exercise-8
#Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.

same_name = "raquel"
user_name = input("what is your name?\n")
if user_name == same_name:
    print("omg we have the same name")
    
# exercise-9
# Write code that will ask the user for their height in centimeters.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.

user_height = float(input("what is your height in inches?\n"))
if user_height > 145:
    print("you are tall enough to ride")
else:
    print("you need to grow more to ride")
    

    