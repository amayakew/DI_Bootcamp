from database_connection import get_cursor, commit
from menu_item import MenuItem

class MenuManager:
    def get_by_name(self,item_name):
        cursor = get_cursor()
        cursor.execute(f'''SELECT * FROM menu_items WHERE item_name = '{item_name}';''')
        result = cursor.fetchone()
        if not result:
            return None
        else:
            return MenuItem(result[1],result[2])

    def all_items(self):
        cursor = get_cursor()
        cursor.execute(f'''SELECT * FROM menu_items''')
        results = cursor.fetchall()
        items_list = []
        for result in results:
            item = MenuItem(result[1],result[2])
            items_list.append(item)
        return items_list