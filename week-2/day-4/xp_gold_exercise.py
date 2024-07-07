#exercise 1

# def get_age(year, month, day):
#     current_year = 2024
#     current_month = 6
#     current_day = 18
#     year_old = current_year - year
#     if month > current_month :
#         year_old -= 1 
#     elif month == current_month:
#         if day < current_day:
#             year_old -= 1
#     return int(year_old)

# def can_retire(gender, date_of_birth):
#     date_of_birth.split('/')
#     year, month, day = date_of_birth
#     get_age(year, month, day)
#     if gender == 'm':
#         if get_age() >= 67:
#             return True
#         else:
#             return False
#     elif gender == 'f' :
#         if get_age() >= 62:
#             return True
#         else:
#             return False 
#     elif gender != "f" or "m":
#         print("your gender is not correct")           
        

# gender = input('What is your gender? (by "m" or "f") ')
# date = input('what is your birthdate? in the form of "yyyy/mm/dd" ')
# can_retire(gender, date)


# #exercise 2
# def add_x( num : int):
#     result = 0
#     for i in range(4):
#         term = int(num * i)
#         result += term
        
#     return result

# print(add_x(3))

#exercise 3
import random

def throw_dice():
    dice = random.randint(1, 6)
    return dice

def throw_until_doubles():
    dice1 = 1
    dice2 = 0
    times = 0
    while dice1 != dice2:
        dice1 += throw_dice()
        dice2 += throw_dice()
        times += 1
    return times

def main():
    collection_times = []
    for _ in range(100):
        collection_times.append(throw_until_doubles())
    print(f'it took {sum(collection_times)} throws to get 100 doubles')
    average = sum(collection_times) / len(collection_times)
    print(f'the average of tries for each double is {round(average, 2)}')

main()
        
    
        
