import math
class Circle:
    
    all_circle = []
    
    def __init__(self, diameter = None, radius = None):
        self.diameter = diameter
        self.radius = radius
        if diameter == None:
            self.diameter = radius * 2
        elif radius == None:
            self.radius = diameter / 2
        
    def caculate_area(self):
        return math.pi * self.radius ** 2
    
    def __str__(self):
            return f"the circle diameter is {self.diameter} and the circle radius is {self.radius}"
        
    def __add__(self, other):
        new_radius = self.radius + other.radius
        self.all_circle.append(other)
        return Circle(radius = new_radius)
    
    def __gt__(self, other):
        if self.radius > other.radius:
            return True
        else:
            return False
    def __eq__(self, other):
        if self.radius == other.radius:
            return True
        else:
            return False
        
    @staticmethod
    def get_radius(circle):
        return circle.radius
     
    @classmethod   
    def sort_circle(cls):
        new_circle = sorted(cls.all_circle, key = cls.get_radius)
        print(new_circle)

circle1 = Circle(diameter = 4)
circle2 = Circle(radius = 6)
print(circle1.__str__())
# print(circle2.__str__())
# print(circle1.caculate_area())
# print(circle2.caculate_area())
# circle3 = circle1 + circle2
# print(circle3.radius)
# print(circle2.__gt__(circle1))