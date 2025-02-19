from menu_manager import MenuManager
from menu_item import MenuItem

menu_manager = MenuManager()
menu_items = []

def show_user_menu():
    print('View an Item (V)')
    print('Add an Item (A)')
    print('Delete an Item (D)')
    print('Update an Item (U)')
    print('Show the Menu (S)')
    print('Exit the Program (X)')
    user_choice = input('Choose the action: ')
    if user_choice.upper() == 'V':
        view_an_item()
    elif user_choice.upper() == 'A':
        add_item_to_menu()
    elif user_choice.upper() == 'D':
        remove_item_from_menu()
    elif user_choice.upper() == 'U':
        update_item_from_menu()
    elif user_choice.upper() == 'S':
        show_restaurant_menu()
    elif user_choice.upper() == 'X':
        show_restaurant_menu()
        return
    else:
        print('Invalid choice, try again ->')
        print('\n---------------------\n\n')
        show_user_menu()

    print('\n---------------------\n\n')
    show_user_menu()

def view_an_item():
    user_item = input('Choose item: ')
    print (menu_manager.get_by_name(user_item))

def add_item_to_menu():
    new_item = input('Enter new item: ')
    new_item_price = input('Enter price: ')
    item = MenuItem(new_item,new_item_price)
    item.save()
    menu_items.append(item)
    print('Item was added succesfully')

def remove_item_from_menu():
    item_to_delete = input('Choose item to delete: ')
    item_was_deleted = False
    for item in menu_items:
        if item.item_name == item_to_delete:
            item.delete()
            menu_items.remove(item)
            item_was_deleted = True
    if item_was_deleted:
        print('Item was deleted sucessfully')
    else:
        print('Item not found')

def update_item_from_menu():
    item_to_update = input('Choose item to update: ')
    new_name = input('Choose new name or type None: ')
    new_price = input('Choose new price or type None: ')
    item_was_updated = False
    for item in menu_items:
        if item.item_name == item_to_update:
            item.update(new_name if new_name != 'None' else None, int(new_price) if new_price != 'None' else None)
            item_was_updated = True
    if item_was_updated:
        print('Item was updated succesfully')
    else:
        print('Item was not found')

def show_restaurant_menu():
    print(menu_manager.all_items())


show_user_menu()