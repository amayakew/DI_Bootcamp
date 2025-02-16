-- CREATE TABLE items(
-- item_id SERIAL PRIMARY KEY,
-- item_name VARCHAR (50) NOT NULL,
-- item_price SMALLINT NOT NULL
-- )

-- INSERT INTO items (item_name,item_price)
-- VALUES
-- ('Small Desk', 100),
-- ('Large Desk', 300),
-- ('Fan', 80)

-- ALTER TABLE items DROP COLUMN item_id;
-- ALTER TABLE items ADD COLUMN item_id SERIAL PRIMARY KEY


-- CREATE TABLE customers(
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR(100) NOT NULL
-- )

-- ALTER TABLE customers ADD COLUMN customer_id SERIAL PRIMARY KEY

-- INSERT INTO customers (first_name,last_name)
-- VALUES
-- ('Greg','Jones'),
-- ('Sandra','Jones'),
-- ('Scott','Scott'),
-- ('Trevor','Green'),
-- ('Melanie','Johnson')

-- SELECT * FROM items
-- SELECT * FROM customers

-- SELECT * FROM items WHERE item_price > 80
-- SELECT * FROM items WHERE item_price <= 300
-- SELECT * FROM customers WHERE last_name = 'Smith'
-- SELECT * FROM customers WHERE last_name = 'Jones'
-- SELECT * FROM customers WHERE first_name != 'Scott'