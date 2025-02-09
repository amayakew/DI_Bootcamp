# Exercise1

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat('Simon', 2)
cat2 = Cat('Daisy', 6)
cat3 = Cat('Cat', 4)  


def get_cat_age(cat):
    return cat.age

def find_oldest_cat(*cats):
    oldest_cat = max(cats, key=get_cat_age)
    return oldest_cat

oldest_cat = find_oldest_cat(cat1, cat2, cat3)
print(f'The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.')


# Exercise2

class Dog:
    def __init__(self,name,height):
        self.name = name
        self.height = height

    def bark(self):
        print(f'{self.name} goes woof!')

    def jump(self):
        x = self.height*2
        print(f'{self.name} jumps {x}cm high!')

davids_dog = Dog('Rex', 50)
print(f"{davids_dog.name} is a David's dog.")
print(f"The dog's height is {davids_dog.height}cm.")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog('Teacup', 20)
print(f"{sarahs_dog.name} is a Sarah's dog.")
print(f"The dog's height is {sarahs_dog.height}cm.")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f'{davids_dog.name} is bigger than {sarahs_dog.name}')
else:
    print(f'{sarahs_dog.name} is bigger than {davids_dog.name}')    


# Exercise3

class Song:
    def __init__(self,lyrics:list):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for element in self.lyrics:
            print(f"{element}")

under_the_bridge= Song(["Sometimes I feel that I don't have a partner","Sometimes I feel like my only friend", "It's the city I live in, the city of angels","Lonely as I am, together we cry"])

under_the_bridge.sing_me_a_song()


# Exercise4

class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
        else:
            print('We already have this animal in our zoo.')

    def get_animals(self):
        print(self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        else:
            print("We don't have this animal in our zoo.")

    def sort_animals(self):
        sorted(self.animals)
        grouped_animals = {}
        for animal in self.animals:
            first_letter = animal[0].capitalize()
            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = [animal]
            else:
                grouped_animals[first_letter].append(animal)           
        return grouped_animals
    
    def get_groups(self):
        print(self.sort_animals())


ramat_gan_safari = Zoo('Ramat Gan Safari')
ramat_gan_safari.add_animal('Koala')
ramat_gan_safari.get_animals()
ramat_gan_safari.add_animal('Zebra')
ramat_gan_safari.add_animal('Kenguru')
ramat_gan_safari.add_animal('Wolf')
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal('Tiger')
ramat_gan_safari.sell_animal('Wolf')
ramat_gan_safari.get_groups()