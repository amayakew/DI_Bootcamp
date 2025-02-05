
matrix = [
    ['7','i','i'],
    ['T','s','x'],
    ['h','%','?'],
    ['i','','#'],
    ['s','M',''],
    ['$','a',''],
    ['#','t','%'],
    ['^','r','!']
    ]

alpha = ''
for col in range(0,3):
    for row in matrix:
        letter = row[col]
        if letter.isalpha():
            alpha += letter
        else:
            if len(alpha) != 0 and alpha[-1] != ' ':
                alpha += ' '

print(alpha)