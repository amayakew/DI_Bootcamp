# matrix = [
#     ['7','i','i'],
#     ['T','s','x'],
#     ['h','%','?'],
#     ['i','','#'],
#     ['s','M',''],
#     ['$','a',''],
#     ['#','t','%'],
#     ['^','r','!']
#     ]


matrix_string = '''7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!'''

matrix = []

rows = matrix_string.split('\n')
print(rows)

for row in rows:
    matrix_row = list(row)
    matrix.append(matrix_row)
print(matrix)

alpha = ''
for col in range(len(matrix_row)):
    for matrix_row in matrix:
        letter = matrix_row[col]
        if letter.isalpha():
            alpha += letter
        else:
            if len(alpha) != 0 and alpha[-1] != ' ':
                alpha += ' '

print(alpha)
