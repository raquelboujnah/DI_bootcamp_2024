class Character:
    
    def __init__(self, name, life = 20, attack = 10):
        self.name = name
        self.life = life
        self.attack = attack
        
    def basic_attack(self, other):
        self.life = 0
        other.life = 0 
        
class Druid(Character):
    
    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life, attack)
        print(f"I am {self.name}, a steward of nature's wisdom and a guardian of the Earth's harmony.")
    
    def meditate(self):
        if self.attack > 2:
            self.attack -= 2
            self.life += 10
        else:
            user_choice = input("Your attack point is too low to meditate. I can advise you to help an animal to increase your attack type 'help animal', if you are not interested type 'rest' and go get some rest - ")
            if user_choice == "help animal":
                self.animal_help()
                self.meditate()
            elif user_choice == "rest":
                return
            elif user_choice != "help animal" and user_choice != "rest":
                print("I didn't get your request right")
                

    def animal_help(self):
        self.attack += 5  
        
    def fight(self, other):
        other.life -= (0.75 * self.life + 0.75 * self.attack)     
        
class Warrior(Character):
    
    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life, attack)
        print(f"I am {self.name}, a warrior forged in the crucible of battle, defender of the weak, and a beacon of unwavering courage.")
     
    def brawl(self, other):
        other.life -= (2 * other.attack)
        self.life += (0.5 * self.attack)
        
    def train(self):
        self.attack += 2
        self.life += 2
        
    def roar(self, other):
        if self.attack > 3 and other.attack > 3:
            self.attack -= 3
            other.attack -= 3
        else:
            print("You don't have enough point attack to roar")
    
class Mage(Character):
    
    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life, attack)
        print(f"I am {self.name}, a mage harnessing the arcane energies, delving into the mystic realms, and a seeker of knowledge and power beyond the mundane.")

    def curse(self, other):
        if self.attack > 2 and other.attack > 2:
            self.attack -= 2
            other.attack -= 2
        else:
            print("You don't have enough point attack to curse")
    
    def summon(self):
        self.attack += 3
        
    def cast_spell(self, other):
        pass
             
        
     
druid = Druid("Dan")
#druid.meditate()
warrior = Warrior("Wally")
warrior.train()
print(warrior.attack)
mage = Mage("Mick")
