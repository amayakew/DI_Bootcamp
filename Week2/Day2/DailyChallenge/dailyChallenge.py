import math
class Pagination:
    def __init__(self,items = None, pageSize = 10):
        self.items = items
        self.pageSize = int(pageSize)
        self.current_page = 1
        self.total_pages = math.ceil(len(items) / int(pageSize))

    def getVisibleItems(self):
        from_index = (self.current_page - 1) * self.pageSize
        to_index = from_index + self.pageSize
        return self.items[from_index:to_index]
    
    def goToPage(self,pageNum):
        if pageNum < 1:
            self.current_page = 1
        elif pageNum > self.total_pages:
            self.current_page = self.total_pages
        else:
            self.current_page = pageNum
        
        return self

    def prevPage(self):
        return self.goToPage(self.current_page - 1)

    def nextPage(self):
        return self.goToPage(self.current_page + 1)

    def firstPage(self):
        return self.goToPage(1)

    def lastPage(self):
        return self.goToPage(self.total_pages)

        
alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

print(p.getVisibleItems())
# ["a", "b", "c", "d"]

p.nextPage()

print(p.getVisibleItems())
# ["e", "f", "g", "h"]

p.lastPage()

print(p.getVisibleItems())
# ["y", "z"]

print(p.firstPage().nextPage().getVisibleItems())