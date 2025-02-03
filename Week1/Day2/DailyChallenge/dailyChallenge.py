# Challenge1

number = int(input('Enter your number: '))
length = int(input('Enter the length: '))
mult_list = []
for i in range(1,length + 1):
    mult_item = number * i
    mult_list.append(mult_item)
print(mult_list)    

# Challenge2

string = input('Enter your string: ')
new_string = ''
for i in range(0, len(string) - 1):
    if string[i] != string[i + 1]:
        new_string += string[i]
new_string += string[-1]
print(new_string)