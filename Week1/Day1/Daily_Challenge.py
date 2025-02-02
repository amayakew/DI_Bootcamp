string = input('Enter a 10 characters string: ')
string_length = len(string)
if string_length < 10:
    print('string not long enough')
elif string_length > 10:
    print('string too long')
else:
    print('perfect string')

first_char = string[0]
last_char = string[-1]
print(first_char + '\n' + last_char)

new_string = ''
for char in string:
    new_string = new_string + char
    print(new_string)

import random    
jumbled_string = list(string)
random.shuffle(jumbled_string)
jumbled_string = ''.join(jumbled_string)
print(jumbled_string)