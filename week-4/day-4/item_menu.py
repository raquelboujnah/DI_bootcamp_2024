import psycopg2

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

    
class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price
        self.table_name = "menu_items"
        
    def save(self):
        query = f'''
            insert into {self.table_name}(item_name, item_price)
            values
            ('{self.name}', '{self.price}')
        '''
        cursor.execute(query)
        connection.commit() 
        
        
    def delete(self):
        query = f'''
            select id from {self.table_name} where item_name = '{self.name}'
        '''
        cursor.execute(query)
        output = cursor.fetchall()[0][0]
        query = f'''
            delete from {self.table_name} where id = {output}
        '''
        cursor.execute(query)
        connection.commit()
        
        
    def update(self, new_name = None, new_price = None):
        if new_price == None:
            query = f'''
                update {self.table_name}
                set item_name = '{new_name}'
                where item_name = '{self.name}'
            '''
            cursor.execute(query)
            connection.commit() 
        elif new_name == None:
            query = f'''
                update {self.table_name}
                set item_price = '{new_price}'
                where item_name = '{self.name}'
            '''
            cursor.execute(query)
            connection.commit() 
        else:
            query = f'''
                update {self.table_name}
                set item_name = '{new_name}', item_price = '{new_price}'
                where item_name = '{self.name}'
            '''
            cursor.execute(query)
            connection.commit() 
            
