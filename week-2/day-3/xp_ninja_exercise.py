# Bonus: There are a few duplicates in this list:["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
# Remove these programmatically. (Hint: you can use set to help you).
# Print out the companies without duplicates, in a comma-separated string with no line-breaks (eg. “Acura, Alfa Romeo, Aston Martin, …”), also print out a message saying how many companies are now in the list.

# Bonus: Print out the list of manufacturers in ascending order (A-Z), but reverse the letters of each manufacturer’s name.

cars = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
cars_list = cars.split(',')
print(len(cars_list))
cars_list_sort = sorted(cars_list)
cars_list_sort.reverse()
print(cars_list_sort)
o_in_car = 0
for car in cars_list:
    if 'o' in car:
        o_in_car += 1
    else:
        continue
print(o_in_car)

i_notin_car = 0
for car in cars_list:
    if 'i' not in car:
        i_notin_car += 1
    else:
        continue
print(i_notin_car)

more_cars = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
less_cars = set(more_cars)
print((', ').join(less_cars))

reversed_cars_list = []
for car in cars_list:
    reversed_car = car[::-1]
    reversed_cars_list.append(reversed_car)
    
print(reversed_cars_list)