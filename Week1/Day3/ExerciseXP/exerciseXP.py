# Exercise1

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
numbers_dict = dict(zip(keys,values))
print(numbers_dict)

# Exercise2

family = {'rick': 43, 
          'beth': 13, 
          'morty': 5, 
          'summer': 8}

sum_price = 0

for name, age in family.items():
    family_member_price = 0
    if age < 3:
        family_member_price = 0
    if 3 <= age <= 12:
        family_member_price = 10
    else:
        family_member_price = 15
    print(f'{name} has to pay ${family_member_price}')
    sum_price += family_member_price
print(f'Total tickets cost: ${sum_price}') 

# Bonus
    
family_dict = {}
name_list = []
age_list = []
sum_price = 0

family = int(input('How many people want to see the movie: '))
for member in range(0,family):
    name = input('Enter the name: ')
    name_list.append(name)
    age = int(input('Enter age: '))
    age_list.append(age)
family_dict = dict(zip(name_list,age_list))
print(family_dict)   

for name, age in family_dict.items():
    family_member_price = 0
    if age < 3:
        family_member_price = 0
    if 3 <= age <= 12:
        family_member_price = 10
    else:
        family_member_price = 15
    print(f'{name} has to pay ${family_member_price}')
    sum_price += family_member_price
print(f'Total tickets cost: ${sum_price}')    

# Exercise3

brand = {'name': 'Zara',
         'creation_date': 1975,
         'creator_name': 'Amancio Ortega Gaona', 
         'type_of_clothes': ['men', 'women', 'children', 'home'], 
         'international_competitors': ['Gap', 'H&M', 'Benetton'], 
         'number_stores': 7000, 
         'major_color': {'France': ['blue'], 
                        'Spain': ['red'], 
                        'US': ['pink', 'green']}
}
print(brand)

brand['number_stores'] = 2
print(f'Updated number of stores: {brand['number_stores']}')

print(f'In Zara stores you can find whatever you need for: {brand['type_of_clothes']}')

brand['country_creation'] = 'Spain'
print(f'Country creation: {brand['country_creation']}')

if 'international_competitors' in brand:
    brand['international_competitors'].append('Desigual')
    print(f'Updated international competitors: {brand['international_competitors']}')

del brand['creation_date']
if 'creation_date' not in brand:
    print('There is no information about date of brand\'s creation')    

print(f'The newest competitor is: {brand["international_competitors"][-1]}')

print(f'The major clothes colors in the US: {brand["major_color"]['US']}')

print(f'Length of the dictionary: {len(brand)}')

print(brand.keys())

more_on_zara = {'creation_date': 1975, 
                'number_stores': 10000}

brand.update(more_on_zara)
print(brand)
print(f'New stores\' number: {brand['number_stores']}') 
# previous stores' number changed to stores' number from new dictionary

# Exercise4

# 1
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
numbers = []

for i, user in enumerate(users):
     numbers.append(i)
disney_users_A = dict(zip(users,numbers))
print(disney_users_A)

# 2
disney_users_B = dict(zip(numbers,users))
print(disney_users_B)

# OR

disney_users_B = {}
for i, user in enumerate(users):
     disney_users_B[i] = user
print(disney_users_B)

# 3

sorted_users = sorted(users)
disney_users_C = {}
for i, user in enumerate(sorted_users):
     disney_users_C[user] = i
print(disney_users_C)

# 4.1

disney_users_A_2 = disney_users_A.copy()

del_list = []
for key in disney_users_A_2.keys():
    if 'i' not in key:
          del_list.append(key)
for item in del_list:
    del disney_users_A_2[item]         
print(disney_users_A_2)

# 4.2

disney_users_A_3 = disney_users_A.copy()

del_list = []
for key in disney_users_A_3.keys():
     if key[0] != 'M' and key[0] != 'P':
          del_list.append(key)
for item in del_list:
    del disney_users_A_3[item]         
print(disney_users_A_3)