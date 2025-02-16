-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES
-- ('Matt','Damon','08/10/1970', 5),
-- ('George','Clooney','06/05/1961', 2);

-- INSERT INTO actors (first_name,last_name,age,number_oscars)
-- VALUES
-- ('Julia','Roberts','28/12/1967',1)

-- INSERT INTO actors (first_name,last_name,age,number_oscars)
-- VALUES
-- ('Demi','Moore','11/11/1962',0)

-- INSERT INTO actors (first_name,last_name,age,number_oscars)
-- VALUES
-- ('Javier','Bardem','01/03/1969',1),
-- ('Monica','Bellucci','30/09/1964',0),
-- ('Cillian','Murphy','25/05/1976',1);

-- UPDATE actors
-- SET age = '28/10/1967'
-- WHERE age = '28/12/1967'

-- SELECT * FROM actors WHERE first_name = 'Matt'
-- SELECT * FROM actors WHERE number_oscars >= 3
-- SELECT last_name FROM actors WHERE first_name != 'Matt'
-- SELECT first_name, last_name FROM actors WHERE first_name = 'Matt' AND last_name = 'Damon'
-- SELECT first_name, last_name FROM actors WHERE first_name = 'Matt' AND last_name = 'Clooney' ---> there is no such actor
-- SELECT first_name, last_name FROM actors WHERE first_name = 'Matt' OR number_oscars = 2
-- SELECT * FROM actors WHERE last_name LIKE '%mon%' ----> in the middle of last name there is '..mon..'
-- SELECT first_name FROM actors WHERE last_name LIKE '%y'
-- SELECT first_name FROM actors WHERE last_name LIKE 'da%' ---> doesn't work because LIKE is key sensitive
-- SELECT first_name FROM actors WHERE last_name ILIKE 'da%' ---> works because ILIKE is not key sensitive
-- SELECT * FROM actors LIMIT 1 ---> first actor
-- SELECT * FROM actors WHERE age > '1960-01-01' LIMIT 1
-- SELECT * FROM actors WHERE age > '1960-01-01' LIMIT 3 OFFSET 2 --> three actors after first two
-- SELECT * FROM actors WHERE age > '1960-01-01' ORDER BY first_name ASC ---> alphabetic order

-- SELECT * FROM actors LIMIT 4
-- SELECT * FROM actors ORDER BY last_name DESC LIMIT 4
-- SELECT * FROM actors WHERE first_name ILIKE '%e%'
-- SELECT * FROM actors WHERE number_oscars >= 5

-- UPDATE actors SET age='1970-01-01' WHERE first_name='Matt' AND last_name='Damon' ---> just update
-- UPDATE actors 
-- SET age='1970-01-01' 
-- WHERE first_name='Matt' AND last_name='Damon'
-- RETURNING --------> update and return the updated row with the following information
--     actor_id,
--     first_name, 
--     last_name,
--     age;
-- DELETE FROM actors WHERE actor_id=2
-- RETURNING actor_id, first_name, last_name, number_oscars ---> deletes the row and shows what was deleted

-- UPDATE actors SET first_name = 'Maty' WHERE first_name = 'Matt'
-- UPDATE actors SET number_oscars = 6 WHERE number_oscars = 5 RETURNING actor_id,first_name,last_name,age,number_oscars;
-- ALTER TABLE actors RENAME age TO birthdate
-- DELETE FROM actors WHERE first_name = 'Demi' RETURNING actor_id,first_name,last_name,birthdate,number_oscars

-- SELECT * FROM actors