#challenge-1
# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.
# user_word = input("type a word")
# word_list = []
# for index, letter in enumerate(user_word):
#     word_list[letter].append(index)
# print(word_list)

#challenge-2
items_purchase = {
  "xilophone": "$40",
  "Honey": "$300",
  "Fan": "$140",
  "Bananas": "$4,000",
  "zPan": "$10",
  "Spoon": "$20"
}
wallet = input('how much would you like to spend? ')
items_list = []
for item, price in items_purchase.items():
    if convert_value > wallet:
        wallet -= convert_value
        items_list = (item)
if len(items_list) = 0:
    print("nothing")
else:
    print(items_list)
    
total_cost = 0
num_people = input('How many people are in the family?')
for i in num_people:
    age = input(f'Enter the age of person {i}:')
    if age < 3:
        print('Ticket is free')
        ticket_price = 0
    elif age 3 <= 12:
        print('Ticket costs $10')
        ticket_price = 10

total_cost += ticket_price
print(f'\nThe totalcost for the family ticket is: ${total_cost}')
