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
# Create a class called Family and implement the following attributes:
# members: list of dictionaries
# last_name : (string)
# Implement the following methods:
# born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
# is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
# family_presentation: a method that prints the family’s last name and all the members’ details.
# Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.

class Family:
    def __init__(self, last_name):
        self.member = [{'name':'Michael','age':35,'gender':'Male','is_child':False},
                        {'name':'Sarah','age':32,'gender':'Female','is_child':False}]
        self.last_name = last_name
        
    def born(self, **child):
        self.member.append(child)
        print("Congrats!!")
        print(self.member)
        
    def is_18(self, name):
        for memb in self.member:
            if memb['name'] == name and memb['age'] >= 18 :
                return True
            else:
                return False
            
    def family_presentation(self):
        print(f'the family {self.last_name}:')
        for memb in self.member:
            for key, value in memb.items():
                print(f'{key}: {value}')
            
            
family_1 = Family("Boujnah")
family_1.born(name = 'Marie', age = 0, gender = 'Female', is_child  = True)
family_1.family_presentation()
        

#exercise 5
# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)
# Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.
# Add a method called incredible_presentation which :
# Print a sentence like “*Here is our powerful family **”
# Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)
# Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.
# Call the incredible_presentation method.
# Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.
# Call the incredible_presentation method again.

class TheIncredibles(Family):
    def __init__(self, last_name):
        super().__init__(last_name)
        self.member = [
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ]
        
    def use_power(self, name):
        for memb in self.member:
            if memb['name'] == name and memb['age'] >= 18:
                print(memb['power'])
            else:
                raise Exception('you are not over 18 years old.')
            
    def incredible_presentation(self):
        print(f'Here is our powerful family: {self.last_name}')
        self.family_presentation()
        
family_2 = TheIncredibles('Incredible')
family_2.incredible_presentation()
family_2.born(name ='jack', age = 0, gender = 'Male', is_child = True, power = 'Unknow Power', incredible_name = 'BabyJack')
family_2.incredible_presentation()
