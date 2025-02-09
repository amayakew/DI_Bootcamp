
class Farm:
    def __init__(self,name):
        self.name = name
        self.animals = {}

    def add_animal(self,name, number = 1):
        if name in self.animals:
            self.animals[name] += number
        else:
            self.animals[name] = number

    def get_info(self):
        print(f"{self.name}'s farm \n")
        for key,value in self.animals.items():
            print(f'{key} : {value}')
        print('\n\t E-I-E-I-0!')

    def get_animal_types(self):
        animals_list = sorted(list(self.animals.keys()))
        return animals_list
    
    def get_short_info(self):
        animal_types = self.get_animal_types()
        text = f"{self.name}'s farm has "
        for i, animal_type in enumerate(animal_types):
            animal_type_name = animal_type
            if self.animals[animal_type] > 1:
                animal_type_name += 's'

            if i == 0:
                text += animal_type_name
            elif i == len(animal_types) - 1:
                text += f' and {animal_type_name}.'
            else:
                text += f', {animal_type_name}'
        return text



macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.add_animal('horse', 2)
macdonald.get_info()     
print(macdonald.get_animal_types())  
print(macdonald.get_short_info())