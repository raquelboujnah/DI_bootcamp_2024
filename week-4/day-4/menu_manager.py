# 2Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.
import psycopg2
from item_menu import MenuItem

DB_NAME = "menu_items_xp_day4"
USER = "postgres"
PASSWORD = "postgres"
HOST = "localhost"
PORT = "5432"

try:
    connection = psycopg2.connect(
        dbname = DB_NAME,
        user = USER,
        password = PASSWORD,
        host = HOST,
        port = PORT
    )
except Exception as e:
    print(f"Error: {e}")
    
cursor = connection.cursor()


class MenuManager:
    def __init__(self, name):
        self.name = name
        self.table_name = "menu_items"
        
    def get_by_name(self):
        try:
            query = f'''
                select * from {self.table_name} where name_item = '{self.name}'
            '''
            cursor.execute(query)
            output = cursor.fetchall()
            print(output)
        except Exception as e:
            print(f"{e} The name of the item you search is not in our menu")
            
    @staticmethod
    def all_items():
        query = '''
            select item_name, item_price from menu_items
        ''' 
        cursor.execute(query)
        output = cursor.fetchall()
        for name, price in output:
            print(f'{name} : {price}')
        
        
# item = MenuItem('Burger', 35)
# item3 = MenuItem('pizza', 25)
# item4 = MenuItem('pasta', 20)
# item3.save()
# item4.save()

# item.delete()
# item.update('Veggie Burger', 37)

# item2 = MenuManager.get_by_name('Beef Stew')