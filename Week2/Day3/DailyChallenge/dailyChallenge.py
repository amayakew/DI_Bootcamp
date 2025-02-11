import math
import turtle

class Circle:
    def __init__(self,radius):
        self.radius = radius
        self.diameter = radius*2
    
    def circle_area(self):
        area = int(math.pi * self.radius**2)
        return area
    
    def __str__(self):
        return f"R:{self.radius}, diameter - {self.diameter}"
    
    def __repr__(self):
        return f'Circle({self.radius})'

    def __add__(self,other):
        new_circle = Circle(self.radius + other.radius)
        return new_circle
    
    def __gt__(self,other):
        if self.radius > other.radius:
            return True
        else:
            return False

    def __eq__(self,other):
        return self.radius == other.radius

circle5 = Circle(5)
circle10 = Circle(10)

print(circle5.circle_area())
print(circle10.__str__())
print(circle5 + circle10)
print(circle5 > circle10)  
print(circle5 < circle10)
print(circle5 == circle10)  
circles = [circle10, circle5]
print(circles)
print(sorted(circles))

screen = turtle.Screen()
my_turtle = turtle.Turtle()
my_turtle.circle(circle5.radius)
my_turtle.circle(circle10.radius)
my_turtle.circle((circle10 + circle5).radius)
turtle.mainloop()
