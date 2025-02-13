class AnagramChecker:
    def __init__(self,filename):
        self.filename = filename
        try:
            with open(self.filename, 'r') as file:
                self.file_content = file.read()
                self.file = self.file_content.split('\n')
        except FileNotFoundError as err:
            raise err
        
    def is_valid_word(self,word):
        if word in self.file:
            return True
        else:
            return False
        
    def get_anagrams(self,word):
        anagram_list = []
        word_list = list(word)
        for item in self.file:
            if item == word or len(item) != len(word):
                continue
            item_list = list(item)
            is_anagram = True
            for char in word_list:
                if char not in item_list:
                    is_anagram = False
                    break
                else:
                    item_list.remove(char)
            if is_anagram:
                anagram_list.append(item)
        return anagram_list

