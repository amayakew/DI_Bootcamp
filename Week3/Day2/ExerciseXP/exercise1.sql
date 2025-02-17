SELECT * FROM items ORDER BY item_price ASC
-- All items, ordered by price (lowest to highest)

SELECT * FROM items WHERE item_price >= 80 ORDER BY item_price DESC
-- Items with a price above 80 (80 included), ordered by price (highest to lowest)

SELECT first_name,last_name FROM customers ORDER BY first_name ASC LIMIT 3
-- The first 3 customers in alphabetical order of the first name (A-Z) 
-- exclude the primary key column from the results.

SELECT last_name FROM customers ORDER BY last_name DESC
-- All last names (no other columns!), in reverse alphabetical order (Z-A)