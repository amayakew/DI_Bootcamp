# Exercise1

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
    def sing(self, sounds):
        return f'{sounds}'

cat1 = Bengal('Choco',3)
cat2 = Chartreux('Sunshine',1)
cat3 = Siamese('Soul',5)
all_cats = [cat1,cat2,cat3]

sara_pets = Pets(all_cats)

sara_pets.walk()
    

# Exercise2

class Dog:
    def __init__(self,name,age,weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f'{self.name} is barking'
    
    def run_speed(self):
        speed = self.weight / self.age * 10
        return speed
    
    def fight(self,other_dog):
        if self.weight * self.run_speed() > other_dog.weight * other_dog.run_speed():
            return f'{self.name} won the fight with {other_dog.name}'
        elif self.weight * self.run_speed() < other_dog.weight * other_dog.run_speed():
            return f'{other_dog.name} won the fight with {self.name}'
        else:
            return f"It's a tie in the fight between {self.name} and {other_dog.name}"


dog1 = Dog('Roy', 4, 30)
dog2 = Dog('Spikey',2,15)
dog3 = Dog('Kent',8,20)

print(dog1.bark())
print(dog1.run_speed())

print(dog2.bark())
print(dog2.run_speed())

print(dog3.bark())
print(dog3.run_speed())

print(dog1.fight(dog2))
print(dog1.fight(dog3))
print(dog2.fight(dog3))


       
# Exercise4
class Family:
    def __init__(self,members:list,last_name:str):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print('Child is added to Family Members, congrats!:)')

    def is_18(self,name):
        for member in self.members:
            if name == member['name']:
                if member['age'] >= 18:
                    return True
                else:
                    return False

    def family_presentation(self):
        print(self.last_name)
        print(self.members)

fam_members = [
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ]
family = Family(fam_members,'Conor')
family.born(name='Billy',age=0,gender='Male',is_child=True)
print(family.is_18('Billy'))
family.family_presentation()

# Exercise5

class TheIncredibles(Family):
    def use_power(self,name):
        if self.is_18(name):
            for member in self.members:
                if name == member['name']:
                    print(member['power'])
        else:
            raise Exception(f'{name} is not 18 years old yet')
        
    def incredible_presentation(self):
        print('Here is our powerful family')
        self.family_presentation()

fam_members = [
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ]
incr_fam = TheIncredibles(fam_members,'Incredibles')
incr_fam.incredible_presentation()
incr_fam.born(name='Jack',age=0,gender='Male',is_child=True,power='Unknown Power')
incr_fam.incredible_presentation()

incr_fam.use_power('Michael')
incr_fam.use_power('Jack')


