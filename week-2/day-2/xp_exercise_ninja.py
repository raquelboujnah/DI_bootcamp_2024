#exercise 1
import math

C = 50
H = 30
input_numbers = input("Enter comma-separated numbers: ")
numbers = input_numbers.split(',')
results = []
for number in numbers:
    D = int(number)
    Q = math.sqrt((2 * C * D) / H)
    results.append(Q)

print(results)

#exercise-2
# list1 = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
# list2 = [44, 91, 8, 24, -6, 0, 56, 8, 100, 2] 
# list3 = [3, 21, 76, 53, 9, -82, -3, 49, 1, 76] 
# list4 = [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]
# print(f"{list1} {list2} {list3} {list4}")
# list1.sort(reverse=True)
# print(list1)
# print(sum(list2))
# list5 = list2[0], list2[-1]
# print(list5)
# list6 = []
# list7 = []
# for num in list3:
#     if num > 50:
#       list6.append(num)
#     elif num < 10:
#         list7.append(num)
# print(list6)
# print(list7)

#exercise-3
# text = "Taking responsibility practicing 100 percent responsibility every day is about seeing ourselves not as right or wrong. but as an agent, chooser, problem solver, and learner in the complex interrelationships of our lives. so that we can better integrate with the people and world around us. When we do this, we enjoy a better and more productive way to live and lead. Christopher Avery, The Responsibility Process"
# print(len(text))
# sentence = text.split(".")
# print(f"there is {len(sentence)} sentences in this text")
# words = text.split(" ")
# print(f"there is {len(words)} in this text")
# unique = set(words)
# print(unique)
# print(len(unique))

#exercise-4
sentence = input("write a sentence").split(" ")
frequency = {}
for word in sentence:
    if word in frequency:
        frequency[word] += 1
    else:
        frequency[word] = 1
print(frequency)
    
    

