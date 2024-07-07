class Farm:
    def __init__(self, name):
        self.name = name
        self.list_animal = {}
        
    def add_animal(self, animal, amount = 1):
        if animal in self.list_animal:
            self.list_animal[animal] += amount
        else:
            self.list_animal[animal] = amount
        
        
    def get_info(self):
        sentence = f"{self.name}'s farm \n\n"
        for animal, amount in self.list_animal.items():
           sentence += f"{animal} : {amount} \n"
        sentence += "\n \n      E-I-E-I-0!"
        return sentence
    
    def get_animal_types(self):
        list_types = sorted(list(self.list_animal.keys()))
        return list_types
        
    def get_short_info(self):
        all_types = self.get_animal_types()
        for index, type in enumerate(all_types):
            if self.list_animal[type] > 1:
                all_types[index] += 's'
        sentence_farm = ", ".join(all_types[0 : -1])
        print(f"{self.name}'s farm has {sentence_farm} and {all_types[2]}")


macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
macdonald.get_animal_types()
macdonald.get_short_info()
