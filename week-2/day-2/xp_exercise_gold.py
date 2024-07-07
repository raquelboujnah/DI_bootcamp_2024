#exercise-1
# list1 = [1, 2, 3, 4, 5,]
# list2 = [6, 7, 8, 9, 10,]
# list1.extend(list2)
# print(list1)

#exercise-2
# for x in range(1500, 2501):
#     if x % 5 == 0 and x % 7 == 0:
#         print(x)

#exercise-3
# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
# user_name = input("what is your name?: ")
# if user_name in names:
#     print(f"your number is {names.index(user_name)}")
# else:
#     print("You are not in the list")

#exercise-4
# num_1 = int(input("choose a number: "))
# num_2 = int(input("choose a number: "))      
# num_3 = int(input("choose a number: "))
# list_num = max(num_1, num_2,  num_3)
# print(list_num)   

#exercise-5
# alphabet = "abcdefghijklmnopqrstuvwxyz" 
# vowel = ["a", "e", "i", "o", "u", "y"]
# for letter in alphabet:
#     if letter in vowel:
#         print(f"{letter} this is vowel")
#     else:
#         print(f"{letter} this consonant")

#exercise-6
# words = input("write 7 words").split(" ")
# letter = input("write one character")
# for char in words:
#     if letter in char:
#         print(f"the letter {letter} is in place {char.index(letter)} of {char}")
#     else:
#         print(f"the letter {letter} in not inside {char}")
  
#exercise-7
# big_list = range(1, 1000001)
# print(min(big_list))
# print(max(big_list)) 
# print(sum(big_list))    

#exercise-8
# numbers = input("write sequence of comma-separated numbers of your choice: ").split(",")
# print(list(numbers))
# print(tuple(numbers))

#exercise-9
# import random
# while True:
#     user_num = int(input("choose a number from 1-9 or '22' to quit: "))
#     randomm_num = random.randint(0, 9)
#     if user_num == 22:
#         break
#     elif user_num == randomm_num:
#         print("Congrats you found the right number")
#         break
#     elif user_num != randomm_num:
#         print(f"Better luck next time, the number was {randomm_num}")