# Part1

# What is a class?
''' it is a blueprint with different methods and properties inside.
It is used to build any number of different objects=instances'''
# What is an instance?
''' same as object. It is special entity, like variable,but bigger. 
It holds data in the form of attributes of a class or type with special functionality.'''
# What is encapsulation?
''' allows to restrict access to methods and variables (single or double underscores used at the start of the name
(at the end too, in dunders)) to prevent data from direct modification'''
# What is abstraction?
''' is one of the main principles of OOP. It is about hiding the unnecessary details from the user, 
about simplification of understanding. We can use abstract classes and methods. Such class can not be
instantiated directly, it is for inheritance. Abstract methods inside this classes also do not
contain implementation inside the class, only in subclasses.'''
# What is inheritance?
''' one class can inherit functionality from the another one, but also can have its own characteristics.
Inheritance allows to reuse methods from the existing classes.'''
# What is multiple inheritance?
''' when the class inherits from more than one class. MRO(method resolution order) is used to define inheritance order.'''
# What is polymorphism?
''' principle according to which different classes can use the same names for their functions'''


# Part2

from random import shuffle

class Card:
    def __init__(self,suit,value):
        self.suit = suit
        self.value = value

    def __str__(self):
        return f"{self.value} of {self.suit}"

class Deck:
    def __init__(self):
        self.cards = []
        for suit in ['Hearts', 'Diamonds', 'Clubs', 'Spades']:
            for value in ['A','2','3','4','5','6','7','8','9','10','J','Q','K']:
                self.cards.append(Card(suit,value))

    def shuffle(self):
        if len(self.cards) == 52:
            shuffle(self.cards)
        else:
            print("The deck is not full")

    def deal(self):
        card = self.cards.pop(0)
        print(card)
        return card
    
deck = Deck()
deck.shuffle()
deck.deal()
deck.deal()
deck.shuffle()