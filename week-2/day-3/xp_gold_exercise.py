#exercise 1 2 3
birthdays = {}
birthdays['Raquel'] = '2001/08/22'
birthdays['Judith'] = '1996/12/29'
birthdays['Elliot'] = '2007/08/23'
birthdays['Lea'] = '1994/01/25'
birthdays['Ezra'] = '2001/09/21'
new_name = input('add a name to the list ')
new_date = input('add his birthdate, in the format “YYYY/MM/DD ')
birthdays[new_name] = new_date
print('You can look up the birthdays of the people in the list!')
print(birthdays.keys())
name = input('enter a name ')
if name not in birthdays.keys():
    print(f"Sorry, we don't have the birthday information for {name}")
else:
    print(f"{name}'s birthday is {birthdays[name]}")

#exercise 4
items1 = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

for key, value in items1.items():
    print(f'the {key} cost {value}')

items2 = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}

total_cost = 0
for item, details in items2.items():
    total_cost += details["price"] * details["stock"]
