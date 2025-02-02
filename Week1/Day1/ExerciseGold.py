# Exercise1
print('Hello World \n' * 4 + 'I love Python \n' * 4)

#Exercise2
month = int(input('Enter any month of the year between 1 and 12: '))
if month >= 3 and month <= 5:
    print('Spring')
elif month >= 6 and month <= 8:
    print('Summer')
elif month >= 9 and month <= 11:
    print('Autumn')
else:
    print('Winter')