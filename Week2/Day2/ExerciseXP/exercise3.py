# Exercise3

import random

from exerciseXP import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight, trained:bool = False):
            super().__init__(name, age, weight)
            self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = [self.name] + list(args)
        print(f'{", ".join(dog_names)} - all play together')

    def do_a_trick(self):
        tricks = [
            f'{self.name} does a barrel roll',
            f'{self.name} stands on his back legs',
            f'{self.name} shakes your hand',
            f'{self.name} plays dead'
            ]
        if self.trained:
            index = random.randint(0, 3)
            print(tricks[index])
        else:
            print(f'{self.name} is not trained yet.')
            
                 

dog1 = PetDog('Roy', 4, 30)
dog2 = PetDog('Spikey',2,15)
dog3 = PetDog('Kent',8,20)        

dog1.play(dog2.name, dog3.name)

dog2.do_a_trick()
dog3.train()
dog3.do_a_trick()