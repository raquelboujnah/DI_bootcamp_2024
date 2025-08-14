# #exercise 1
# # Instantiate three Cat objects using the code provided above.
# # Outside of the class, create a function that finds the oldest cat and returns the cat.
# # Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

def oldest_cat(list_cat):
    oldest_cat = list_cat[0]
    for cat in list_cat:
        if cat.age > oldest_cat.age:
            oldest_cat = cat
    print(f"the oldest cat is {oldest_cat.name} and is {oldest_cat.age}")  
        
cat1 = Cat('kitty', '3')
cat2 = Cat('mitsi', '4')
cat3 = Cat('gurri', '1')

list_cat = [cat1, cat2, cat3]

oldest_cat(list_cat)

# #exercise 2
# # Create a class called Dog.
# # In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# # Create a method called bark that prints the following string “<dog_name> goes woof!”.
# # Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# # Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# # Print the details of his dog (ie. name and height) and call the methods bark and jump.
# # Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# # Print the details of her dog (ie. name and height) and call the methods bark and jump.
# # Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height
        
    def bark(self):
        print(f"{self.name} goes woof!")
        
    def jump(self):
        print(f'{self.name} jumps {self.height * 2} cm high!')
    
    def describe(self):
        print(f'{self.name} is {self.height}cm')
    
def bigger(list_dog):
    oldest_dog = list_dog[0]
    for dog in list_dog:
        if dog.height > oldest_dog.height:
            oldest_dog = dog
    print(f"the oldest cat is {oldest_dog.name} he is {oldest_dog.height} big")
    
def main():
    david_dog = Dog('Rex', 50)
    sarah_dog = Dog('Teacup', 20)
    Dog.describe(david_dog)
    Dog.jump(david_dog)
    Dog.bark(david_dog)
    Dog.describe(sarah_dog)
    Dog.jump(sarah_dog)
    Dog.bark(sarah_dog)
    list_dog = [david_dog, sarah_dog]
    bigger(list_dog)
    
main()

#exercise 3
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# Create an object
#Then, call the sing_me_a_song method. The output should be:
class Song:
    def __init__(self, lyrics = list):
        self.lyrics = lyrics
    
    def sing_me_a_song(self):
        for sentence in self.lyrics:
            print(sentence)

def main():
    stairway= Song(["There's a lady who's sure","all that glitters is gold", "and she's buying a stairway to heaven"])
    Song.sing_me_a_song(stairway)
    
main()

#exercise 4
# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
# Create a method called get_animals that prints all the animals of the zoo.
# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
# Create a method called get_groups that prints the animal/animals inside each group.
# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.

class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
    
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
    
    def get_animals(self):
        for animal in self.animals:
            print(animal)
            
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        
    def sort_animals(self):
        group_animals = {}
        sorted_animals = sorted(self.animals)
        for animal in sorted_animals:
            first_letter = animal[0]
            if first_letter not in group_animals:
                group_animals[first_letter] = []
            group_animals[first_letter].append(animal)

        return group_animals
    
    def get_groups(self):
        group_dict = {}
        group = self.sort_animals()
        for i, item in enumerate(group):
            group_dict[i + 1] = group[item]
        return group_dict

ramat_gan_safari = Zoo("ramat_gan")
ramat_gan_safari.add_animal("girafe")
ramat_gan_safari.add_animal("turtle")
ramat_gan_safari.add_animal("lion")
ramat_gan_safari.add_animal("baboon")
ramat_gan_safari.add_animal("bear")
ramat_gan_safari.get_animals()
s_animal = ramat_gan_safari.sort_animals()
print(s_animal)
print(ramat_gan_safari.get_groups())
