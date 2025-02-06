# Challenge1 

def abc_string(string = 'world,smile,ball'):
    '''prints user string in alphabetic order'''
    return ','.join([word for word in sorted(string.split(','))])

print(abc_string())
print(abc_string('coffee,time,apple'))


# Challenge2 

def get_longest_word(sentence = 'My favourite fruits are melon, orange and passionfruit.'):
    '''prints the longest word from the sentence, including all characters'''
    sentence_list = sentence.split(' ')
    longest_word = ''
    for word in sentence_list:
        if len(word) > len(longest_word):
            longest_word = word
    return f'The longest word is: {longest_word}'    

print(get_longest_word())