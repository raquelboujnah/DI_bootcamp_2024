#exercise-1
# Print the following output in one line of code:
# Hello world
# Hello world
# Hello world
# Hello world
# I love python
# I love python
# I love python
# I love python

print("hello world \n" " "*4 ,"i love python\n" " "*4)

#exercise-2
# Ask the user to input a month (1 to 12).
# Display the season of the month received :
# Spring runs from March (3) to May (5)
# Summer runs from June (6) to August (8)
# Autumn runs from September (9) to November (11)
# Winter runs from December (12) to February (2)

user_month = int(input("choose a month by typing a number between 1-12\n"))
if 3 <= user_month <= 5:
    print("the month you choose is in the spring")
elif 6 <= user_month <= 8:
    print("the month you choose is in the summer")
elif 9 <= user_month <= 11:
    print("the month you choose is in the autumn")
elif user_month == 12:
    print("the month you choose is in the winter")
elif 1 <= user_month <= 2:
    print("the month you choose is in the winter")
    
