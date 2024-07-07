from math import ceil
class Pagination:
    def __init__(self, items, page_size = 10):
        self.items = items
        self.page_size = int(page_size)
        self.current_page = 1
        self.total_page = ceil(len(items) / page_size)

                
    def get_visible_item(self):
        visible_item = self.items[(self.current_page - 1) * self.page_size:self.current_page * self.page_size]
        print(visible_item)
    
    def prevPage(self):
        if self.current_page == 1:
            print('you are already at the first page')
        else:
            self.current_page -= 1
    
    def nextPage(self):
        if self.current_page == self.total_page:
            print('The end')
            self.current_page = 1
        else: 
            self.current_page += 1
            
    def firstPage(self):
        self.current_page = 0
    
    def lastPage(self):
        self.current_page = self.total_page
    
    def goToPage(self, pageNum):
        if pageNum <= self.total_page and pageNum > 0:
            self.current_page = pageNum
        elif pageNum > self.total_page:
            self.current_page = self.total_page
        elif pageNum <= 0:
            self.current_page = self.firstPage()
    
alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)
p.firstPage()
p.get_visible_item()
p.nextPage()
p.get_visible_item()
p.lastPage()
p.get_visible_item()
p.nextPage
p.get_visible_item()


