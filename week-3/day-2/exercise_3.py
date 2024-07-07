from exercise_xp import Dog
import random
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True

# play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.

class PetDog(Dog):
    def __init__(self, name, age, weight, trained = False):
        super().__init__(name, age, weight)
        self.trained = trained
        
    def train(self):
        print(self.bark())
        self.trained = True
    
    def play(*dogs):
        print(f'{", ".join(dogs)} all play together')
        
    def do_a_trick(self):
        list_print = ['does a barrel roll', 'stands on his back legs', 'shakes your hand', 'plays dead' ]
        if self.trained == True:
            choice = random.choice(list_print)
            print(self.name + choice)

            
my_dog_1 = PetDog("momo", 10, 6)
my_dog_2 = PetDog("momi", 2, 4)
my_dog_3 = PetDog("momu", 12, 8)
PetDog.play(my_dog_1.name, my_dog_2.name, my_dog_3.name)
my_dog_1.train()
my_dog_1.do_a_trick()

