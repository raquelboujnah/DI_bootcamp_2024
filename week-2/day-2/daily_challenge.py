#exercise-1
# sequence = []
# user_number = int(input("choos a number"))
# user_length = int(input("choos a length"))
# for i in range(1 ,user_length + 1):
#     sequence.add(user_number + 1)
# print(sequence)

# #exercise-2
user_word = input("type a word but duplicate as many as you want its letters")
result = "".join(dict.fromkeys(user_word))
print(result)
