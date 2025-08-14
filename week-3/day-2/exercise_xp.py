#exercise 1
# Create another cat breed named Siamese which inherits from the Cat class.
# Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
# Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
# Take all the cats for a walk, use the walk method.

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    pass

cat1 = Bengal('miaou', 2)
cat2 = Chartreux('goori', 3)
cat3 = Siamese('misti', 4)
all_cats = [cat1, cat2, cat3]
sarah_pets = Pets(all_cats)
sarah_pets.walk()


#exercise_2
# Create a class called Dog with the following attributes name, age, weight.
# Implement the following methods in the Dog class:
# bark: returns a string which states: “<dog_name> is barking”.
# run_speed: returns the dogs running speed (weight/age*10).
# fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

# Create 3 dogs and run them through your class.

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
        
    def bark(self):
        return f'{self.name} is barking'
    
    def run_speed(self):
        return self.weight / self.age * 10
    
    def fight(self, another_dog):
        if self.run_speed() > another_dog.run_speed():
            print(f'{self.name} won the fight')
        else:
            print(f'{another_dog.name} won the fight')

dog1 = Dog('rex', 3, 30 )
dog2 = Dog('milki', 5, 55 )
dog3 = Dog('booka', 4, 40 )

print(dog1.bark())
dog2.fight(dog3)


#exercise 3
# Create a new python file and import your Dog class from the previous exercise.

#exercise 4
# Step 1: Person Class
class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""  # Will be set later by the Family class

    def is_18(self):
        return self.age >= 18


# Step 2: Family Class
class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_person = Person(first_name, age)
        new_person.last_name = self.last_name  # Assign family last name
        self.members.append(new_person)

    def check_majority(self, first_name):
        # Search for person with this first name
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print(f"You are over 18, your parents Jane and John accept that you will go out with your friends.")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print(f"No member named {first_name} found in the family.")

    def family_presentation(self):
        print(f"Family last name: {self.last_name}")
        print("Members:")
        for member in self.members:
            print(f" - {member.first_name} {member.last_name}, {member.age} years old")


# ----------- TESTING THE CLASSES -----------

# Create a family
my_family = Family("Smith")

# Add members
my_family.born("Alice", 20)
my_family.born("Bob", 16)

# Check majority
my_family.check_majority("Alice")  # Should allow going out
my_family.check_majority("Bob")    # Should not allow
my_family.check_majority("Eve")    # Not in family

# Present the family
my_family.family_presentation()
