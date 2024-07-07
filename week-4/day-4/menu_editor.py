from item_menu import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    print('View an Item (V) \nAdd an Item (A) \nDelete an Item (D) \nUpdate an Item (U) \nShow the Menu (S) \nExit the menu (E)')
    user_choice = input('choose one fonction of the menu by its letter: ').upper()
    while user_choice not in 'VADUSE':
        user_choice = input("You have to type a letter from the menu").upper()
    return user_choice

def view_item():
    user_view = input("Witch item would you like to see? ")
    item = MenuManager(user_view)
    try:
        item.get_by_name()
    except Exception as e:
        print(f"{e} Item not found")
        
def add_item_to_menu():
    user_item_name = input('Enter the name of the item you want to add: ')
    user_item_price = int(input('Enter the price of the item you want to add: '))
    try:
        user_item = MenuItem(user_item_name, user_item_price)
        user_item.save()
        print('Your item was added successfully')
    except Exception as e:
        print(f"Error: {e}")
        
def remove_item_from_menu():
    user_item_name = input('Enter the name of the item you want to remove: ')
    user_item_price = int(input('Enter the price of the item you want to remove: '))
    try:
        user_item = MenuItem(user_item_name, user_item_price)
        user_item.delete()
        print('Your item was removed successfully')
    except Exception as e:
        print(f"Error: {e}")
        
def update_item_from_menu():
    user_item_name = input('Enter the name of the item you want to update: ')
    user_item_price = int(input('Enter the price of the item you want to update: '))
    user_item_name_update = input('Now enter the new name you want to give to the item you choose: ')
    user_item_price_update = int(input('Now enter the new price you want to give to the item you choose: '))
    try:
        user_item = MenuItem(user_item_name, user_item_price)
        user_item.update(user_item_name_update, user_item_price_update)
        print('Your item was updated successfully')
    except Exception as e:
        print(f"Error: {e}")

def show_restaurant_menu():
    MenuManager.all_items()
    
def main():
    user_action = show_user_menu()
    while user_action != 'E':
        if user_action == "V":
            view_item()
        if user_action == "A":    
            add_item_to_menu()
        if user_action == "D":
            remove_item_from_menu()
        if user_action == "U":
            update_item_from_menu()
        if user_action == "S":
            show_restaurant_menu()
        else:
            show_restaurant_menu()
            break
            
main()
    