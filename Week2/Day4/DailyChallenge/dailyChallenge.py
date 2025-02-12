import re

# Part1

class Text:
    def __init__(self,string):
        self.string = string
        self.words_list = self.string.lower().split(' ')

    def word_frequency(self,word):
        word_number = self.words_list.count(word)
        return word_number
    
    def most_common_word(self):
        most_frequent_word = ''
        frequency = 0
        for word in self.words_list:
            current_word_frequency = self.word_frequency(word)
            if current_word_frequency > frequency:
                most_frequent_word = word
                frequency = current_word_frequency
        return most_frequent_word

    def get_unique_words(self):
        unique_list = []
        for word in self.words_list:
            current_word_frequency = self.word_frequency(word)
            if current_word_frequency == 1:
                if len(unique_list) == 0: 
                    unique_list = [word]
                else:
                    unique_list.append(word)
        return unique_list
    
# Part2

    @classmethod
    def from_file(cls,filename):
        try:
            with open(filename, 'r') as file:
                return cls(file.read())
        except FileNotFoundError as err:
            raise err
            
# Bonus

class TextModification(Text):

    def __init__(self,text):
        text = self.no_punctuation(text)
        text = self.no_stop_words(text)
        super().__init__(text)

    def no_punctuation(self,text):
        clean_text = re.sub(r'[^\w\s]', '', text)
        return clean_text
        
    def no_stop_words(self,text):
        custom_stopwords = {"a", "an", "the", "is", "in", "and", "or", "to", "with"}
        clean_text = ' '.join(word for word in text.split() if word.lower() not in custom_stopwords)
        return clean_text
    

text = Text('A good book would sometimes cost as much as a good house.')
print(text.word_frequency('good'))
print(text.most_common_word())
print(text.get_unique_words())
text2 = Text.from_file('the_stranger.txt')
print(text2.word_frequency('good'))
print(text2.most_common_word())
print(text2.get_unique_words())

text = TextModification('A good book would sometimes cost as much as a good house.')
print(text.word_frequency('good'))
print(text.most_common_word())
print(text.get_unique_words())
text2 = TextModification.from_file('the_stranger.txt')
print(text2.word_frequency('good'))
print(text2.most_common_word())
print(text2.get_unique_words())
