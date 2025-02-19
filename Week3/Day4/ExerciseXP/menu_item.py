from database_connection import get_cursor, commit

class MenuItem:
    def __init__(self,item_name,item_price):
        self.item_name = item_name
        self.item_price = item_price

    def __str__(self):
        return f'{self.item_name}: {self.item_price}'
    
    def __repr__(self):
        return self.__str__()

    def save(self):
        cursor = get_cursor()
        cursor.execute(f'''INSERT INTO menu_items (item_name,item_price)
                       VALUES
                       ('{self.item_name}',{self.item_price})
                       RETURNING *;''')
        result = cursor.fetchone()
        self.item_id = result[0]
        commit()

    def delete(self):
        cursor = get_cursor()
        cursor.execute(f'''DELETE FROM menu_items WHERE 
                       item_id = {self.item_id};''')
        commit()

    def update(self,new_name = None,new_price = None):
        cursor = get_cursor()
        if new_name != None:
            self.item_name = new_name
            cursor.execute(f'''UPDATE menu_items
                        SET item_name = '{new_name}'
                        WHERE item_id = {self.item_id};''')
        if new_price != None:
            self.item_price = new_price
            cursor.execute(f'''UPDATE menu_items
                        SET item_price = {new_price}
                        WHERE item_id = {self.item_id};''')
        commit()