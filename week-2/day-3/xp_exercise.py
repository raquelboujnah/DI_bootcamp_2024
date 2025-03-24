#exercise 1
# Convert the two following lists, into dictionaries.
# Hint: Use the zip method

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

dict1 = dict(zip(keys, values))
print(dict1)


#exercise 2
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Given the following object:

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


# How much does each family member have to pay ?

# Print out the family’s total cost for the movies.
# Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).


# names = input("give a name and separated by a space").split()
# ages = input("give me your ages seperated by a space").split()
# zip_family = zip(names, int(ages))
# family = dict(zip_family)
# print(family)

total_cost = 0
for keys, values in family.items():
    if values < 3:
        total_cost += 0
        print(f"{keys} has to pay 0")
    elif 3 <= values <= 12:
        total_cost += 10
        print(f"{keys} has to pay 10")
    elif values > 12:
        total_cost += 15
        print(f"{keys} has to pay 15")


print(f"your total cost is {total_cost}")


#exercise 3
# Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
# 3. Change the number of stores to 2.
# 4. Print a sentence that explains who Zaras clients are.
# 5. Add a key called country_creation with a value of Spain.
# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
# 7. Delete the information about the date of creation.
# 8. Print the last international competitor.
# 9. Print the major clothes colors in the US.
# 10. Print the amount of key value pairs (ie. length of the dictionary).
# 11. Print the keys of the dictionary.
# 12. Create another dictionary called more_on_zara with the following details:
# 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
# 14. Print the value of the key number_stores. What just happened ?

brand = { "name" : "Zara",
          "creation_date" : 1975,
          "creator_name" : "Amancio Ortega Gaona",
          "type_of_clothes" : ["men", "women", "children", "home"],
          "international_competitors" : ["Gap", "H&M", "Benetton"],
          "number_stores" : 7000,
          "major_color" : {
              "France": "blue", 
              "Spain": "red", 
              "US": "pink, green"
            }
         }


brand["number_stores"] = 2
print(f'zara clients are mostly {" ".join(brand["type_of_clothes"][:-1])}')
brand["country_creation"] = "Spain"
if "international_competitors" in brand.keys():
    brand['international_competitors'].append('Desigual')
del brand["creation_date"]
print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])
print(len(brand))
print(brand.keys())

more_on_zara = {  "creation_date": 1975,
                  "number_stores": 10000
                  }

brand[more_on_zara.keys] = more_on_zara.values()

#exercise 4
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
#1/
# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
#2/
# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}
#3/ 
# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}
# Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
# Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
# Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
# Only recreate the 1st result for:
# The characters, which names contain the letter “i”.
# The characters, which names start with the letter “m” or “p”.

disney_users_a = {}
for index, name in enumerate(users):
    disney_users_a[name] = index
    
disney_users_b = {}
for index, name in enumerate(users):
    disney_users_b[index] = name
    
user_sorted = sorted(users)
disney_users_c = {}
for index, name in enumerate(user_sorted):
    disney_users_c[name] = index

disney_users_d = {}
for index, name in enumerate(users):
    if "i" in name:
        disney_users_d[name] = index
        
disney_users_e = {}
for index, name in enumerate(users):
    if name[0] in ("M", "P"):
        disney_users_e[name] = index



family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
price = 0
for f in family:
    if 3 <= family[f] <= 12:
        price += 10
        print(f"{f} needs to pay 10 nis.")    
    elif family[f] > 12:
        price += 15
        print(f"{f} needs to pay 15 nis.")
    else:
        print(f"{f} doesn't need to pay.")
print(f"Total price: {price} nis.")
