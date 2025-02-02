# Exercise1
print('Hello World \n' * 4)

# Exercise2
print(99 ** 3 * 8)

#Exercise3
print(5<3)
print(3 == 3)
print(3 == '3')
# print('3' > 3)
print('Hello' == 'hello')
# - False
# - True
# - False
# - Error
# - False

# Exercise4
computer_brend = 'Asus'
print (f'I have an {computer_brend} computer')

# Exercise5
name = 'Anastasiya'
age = '29'
shoe_size = '39'
info = 'Hi, my name is ' + name + '. ' + 'I am ' + age + ' years old and I my shoe size is ' + shoe_size + ' :)' 
print(info)

# Exercise6
a = 5
b = 7
if a > b:
    print('Hello World')

# OR

# a = int(input('Enter your first number: '))
# b = int(input('Enter your second number: '))
# if a > b:
#     print('Hello World')

# Exercise7
number = int(input('Enter whatever number: '))
if number%2 == 0:
    print('Even')
else:
    print('Odd')

# Exercise8
my_name = 'Anastasiya'
user_name = input('What is your name? ')
if user_name == my_name:
    print('WOW! We have the same name!')
else:
    print('Your name is very beautiful!')

# Exercise9
height = int(input('Write your height in cm: '))
if height >= 145:
    print('Congratulations! You are high enough to ride a Roller Coaster')
else:
    print('We are sorry:( You should be a little bit higher to ride a Roller Coaster')