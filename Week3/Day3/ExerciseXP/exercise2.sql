-- Use UPDATE to change the language of some films. Make sure that you use valid languages
UPDATE film 
SET language_id = 2 
WHERE film_id >= 1 AND film_id <= 10;
-- CHECK -->
SELECT film.title, film.description, language.name
FROM film
JOIN language
ON film.language_id = language.language_id
WHERE film_id >= 1 AND film_id <= 15;

-- Which foreign keys (references) are defined for the customer table? How does this affect the way 
-- in which we INSERT into the customer table?
-- Answer: address_id is a FOREIGN KEY (PRIMARY KEY address_id is in the address table). To insert
-- into the customer table we add subquery when we set value for the address_id field, which is reference
-- to address_id in address table

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does 
-- it need extra checking?
DROP TABLE IF EXISTS customer_review;
-- the table was dropped easily, because there were not references to this table from other tables

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet)
SELECT COUNT(*) FROM rental WHERE return_date is NULL;

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT film.title, film.rental_rate, rental.return_date
FROM (film FULL OUTER JOIN inventory ON film.film_id = inventory.film_id)
FULL OUTER JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date is NULL
ORDER BY film.rental_rate DESC LIMIT 30;

-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT film.title, actor.first_name, actor.last_name
FROM (film JOIN film_actor ON film.film_id = film_actor.film_id)
JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe' AND film.description ILIKE '%sumo%';
-- Answer: Park Citizen

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT film.title, film.length, film.rating, category.name
FROM (film JOIN film_category ON film.film_id = film_category.film_id)
JOIN category ON film_category.category_id = category.category_id
WHERE film.length < 60 AND film.rating = 'R' AND category.name = 'Documentary';
-- Answer: Cupboard Sinners

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, 
-- and he returned it between the 28th of July and the 1st of August, 2005.
SELECT film.title, film.rental_rate, customer.first_name,customer.last_name, rental.return_date
FROM film 
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON rental.inventory_id = inventory.inventory_id
JOIN customer ON customer.customer_id = rental.customer_id
WHERE customer.first_name = 'Matthew'AND customer.last_name = 'Mahan' AND film.rental_rate > 4.00
AND rental.return_date >= '2005-07-28' AND rental.return_date <= '2005-08-01';
-- Answer: Sugar Wonka

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the 
-- title or description, and it looked like it was a very expensive DVD to replace.
SELECT DISTINCT film.title, film.description, film.replacement_cost, customer.first_name,customer.last_name
FROM (film JOIN inventory ON film.film_id = inventory.film_id)
JOIN customer ON customer.store_id = inventory.store_id
WHERE customer.first_name = 'Matthew'AND customer.last_name = 'Mahan' AND (film.title ILIKE '%boat%' 
OR film.description ILIKE '%boat%')
ORDER BY film.replacement_cost DESC LIMIT 1;

