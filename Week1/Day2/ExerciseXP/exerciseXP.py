# Exercise1

my_fav_numbers = {14,56,7,13,21}
print(f'My favoutite numbers are: {my_fav_numbers}')

my_fav_numbers.add(17)
my_fav_numbers.add(9)
print(f'I have added two more: {my_fav_numbers}')

my_fav_numbers_list = list(my_fav_numbers)
my_fav_numbers_list.pop()
my_fav_numbers = set(my_fav_numbers_list)
print(f'I have removed the last one {my_fav_numbers}')

friend_fav_numbers = {5, 14, 2}
print(f'Favourite numbers of my friend: {friend_fav_numbers}')
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(f'Our favourite numbers: {our_fav_numbers}')

# Exercise2

# It is not possible to add more items to the existing tuple without creating a new one, because tuple is immutable object.

#Exercise3

basket_list = ['Banana', 'Apples', 'Oranges', 'Blueberries']
print(f'My usual basket list: {basket_list}')

basket_list.remove('Banana')
print(f'My list without banana: {basket_list}')

basket_list.pop()
print(f'My list without blueberries: {basket_list}')

basket_list.append('Kiwi')
basket_list.insert(0,'Apples')
print(f'My new list: {basket_list}')

print(f'How many apples in my list? {basket_list.count('Apples')}')

basket_list.clear()
print(f'Now my basket is empty: {basket_list}')

# Exercise4

# Float - is a value type in Python, a number with decimal part.
# Integer - is a whole number.

list = []
for i in range(1,6):
    if i == 1:
        list.append(i + 0.5)
    else:
        list.append(i)
        list.append(i + 0.5)
list.pop()    
print(list)

list = []
for i in range(1, 6):
    list.append(i)
    if i < 5:
        list.append(i + 0.5)
list = list[1:]
print(list)

# Exercise5

numbers_list = []
for number in range(1,21):
    numbers_list.append(number)
print(numbers_list)

print('Numbers with even indexes in the range:')
for index, number in enumerate(numbers_list):
    if index % 2 == 0:
        print(number)

# Exercise6

my_name = 'Anastasiya'
user_name = input('What is your name? ')
while user_name != my_name:
    user_name = input('Try other name: ')
print('We have the same name:)')

# Exercise7

user_fav_fruits = input('Enter your favourite fruit(s) (eg. "apple mango cherry"): ')
fruits_list = []
i = 0
for char in user_fav_fruits:
    if char != ' ':
        if len(fruits_list) == i:
            fruits_list.append(char)
        else:     
            fruits_list[i] += char
    else:
        i += 1
print(fruits_list)
user_fruit = input('Enter fruit which you want to eat now: ')
if user_fruit in fruits_list:
    print('You chose one of your favorite fruits! Enjoy!')
else:
    print('You chose a new fruit. I hope you enjoy')

# Exercise8

pizza = []
toping_price = 2.5
pizza_price = 10
while True:
    pizza_toping = input('Add toping to your pizza (if you do not want to add more topings, write "quit"): ')
    if pizza_toping == 'quit':
        break
    print('We will add that topping to your pizza')
    pizza.append(pizza_toping)
    pizza_price +=toping_price
print(f'Your pizza will be with: {pizza}')
print(f'Your pizza price is: {pizza_price}')

#Exercise9

family_size = int(input('How many people want a ticket? '))
sum_price = 0
for i in range(0,family_size):
    family_age = int(input('Enter the age of family member: '))
    if family_age < 3:
        sum_price += 0
    elif 3 <= family_age <= 12:
        sum_price += 10
    else:
        sum_price += 15
print(f'${sum_price} for all the tickets')

teen_list = ['Ben', 'Andrey', 'Anna', 'Dan', 'Alexa']
for i in teen_list:
    teen_age = int(input(f'How old are you, {i}? '))
    if 16 <= teen_age <= 21:
        print('This movie is restricted for you')
        teen_list.remove(i)
    else:
        print('Here is your ticket')
print(teen_list)

# Exercise10

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
while 'Pastrami sandwich' in sandwich_orders:
    sandwich_orders.remove('Pastrami sandwich')
print(sandwich_orders)

finished_sandwiches = []
while len(sandwich_orders) != 0:
    finished_sandwiches.append(sandwich_orders[0])
    sandwich_orders.remove(sandwich_orders[0])
print(f'Orders remained: {sandwich_orders}')
print(f'Finished orders: {finished_sandwiches}')

for i in finished_sandwiches:
    print(f'I made your {i}')