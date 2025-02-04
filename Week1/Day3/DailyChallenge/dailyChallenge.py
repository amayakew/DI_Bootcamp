# Challenge1

word = input('Enter your word: ')
word_dict = {}

for i, letter in enumerate(word):
    if letter in word_dict.keys():
        word_dict[letter].append(i)
    else:
        word_dict[letter] = [i]
print(word_dict)

# Challenge2

shop_items = {
    'hand mixer': '$25',
    'espresso machine': '$2,500',
    'baking oven': '$150'
}
money = input('Enter available sum of money (e.g. $300): ')
money = int(money.replace('$',''))

bought_items = []
total_price = 0
for item, price in shop_items.items():
    price_int = int(price.replace('$','').replace(',',''))
    if price_int <= money:
        bought_items.append(item)
        money -= price_int    
if len(bought_items) == 0:
    print('Nothing')
else:
    print(sorted(bought_items))