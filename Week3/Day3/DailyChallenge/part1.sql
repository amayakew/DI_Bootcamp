-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.
-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)

CREATE TABLE customer(
customer_id SERIAL,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(100) NOT NULL,
PRIMARY KEY (customer_id)
);

CREATE TABLE customer_profile(
profile_id INTEGER NOT NULL,
isLoggedIn BOOLEAN NOT NULL DEFAULT FALSE,
CONSTRAINT fk_customer_id FOREIGN KEY (profile_id) REFERENCES customer (customer_id) 
ON DELETE SET DEFAULT
ON UPDATE SET DEFAULT
);

-- Insert those customers
-- John, Doe
-- Jerome, Lalu
-- Lea, Rive

-- Insert those customer profiles, use subqueries
-- John is loggedIn
-- Jerome is not logged in

INSERT INTO customer (first_name,last_name)
VALUES
('John','Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

INSERT INTO customer_profile (profile_id,isLoggedIn)
VALUES
((SELECT customer_id FROM customer WHERE first_name = 'John'), TRUE),
((SELECT customer_id FROM customer WHERE first_name = 'Jerome'), FALSE);

-- Use the relevant types of Joins to display:
-- The first_name of the LoggedIn customers
SELECT customer.first_name, customer_profile.isLoggedIn
FROM customer
JOIN customer_profile
ON customer.customer_id = customer_profile.profile_id
WHERE customer_profile.isLoggedIn = TRUE;

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have 
-- a profile.
SELECT customer.first_name, customer_profile.isLoggedIn
FROM customer
FULL OUTER JOIN customer_profile
ON customer.customer_id = customer_profile.profile_id;

-- The number of customers that are not LoggedIn
SELECT COUNT(*) 
FROM customer_profile
FULL OUTER JOIN customer
ON customer.customer_id = customer_profile.profile_id
WHERE isLoggedIn != TRUE or isLoggedIn is NULL;
-- if customer who has not profile is also not logged in
-- OR
SELECT COUNT(*) FROM customer_profile WHERE isLoggedIn != TRUE;
-- if only from customers who has profile

