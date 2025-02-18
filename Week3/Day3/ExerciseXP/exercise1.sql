SELECT name FROM language;
-- Get a list of all the languages, from the language table

SELECT film.title, film.description, language.name
FROM film
JOIN language
ON film.language_id = language.language_id;
-- Get a list of all films joined with their languages – select the following details : 
-- film title, description, and language name

SELECT film.title, film.description, language.name
FROM film
FULL OUTER JOIN language
ON film.language_id = language.language_id;
-- Get all languages, even if there are no films in those languages – select the following details : 
-- film title, description, and language name

CREATE TABLE new_film(
 film_id SERIAL PRIMARY KEY,
 film_name VARCHAR (100) NOT NULL
);

INSERT INTO new_film (film_name)
VALUES
('Dune'),
('Interstellar'),
('Pearl Harbor'),
('Titanic');
-- Create a new table called new_film with the following columns : id, name. 
-- Add some new films to the table

CREATE TABLE customer_review(
 review_id SERIAL,
 film_id INTEGER NOT NULL,
 language_id INTEGER NOT NULL,
 review_title VARCHAR(300) NOT NULL,
 score SMALLINT CHECK (score BETWEEN 1 AND 10),
 review_text TEXT NOT NULL,
 last_update TIMESTAMP WITHOUT TIME ZONE,
 PRIMARY KEY (review_id),
 FOREIGN KEY (film_id) REFERENCES new_film(film_id) ON DELETE CASCADE,
 FOREIGN KEY (language_id) REFERENCES language(language_id)
);
-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

INSERT INTO customer_review(film_id,language_id,review_title,score,review_text,last_update)
VALUES
((SELECT film_id FROM new_film WHERE film_name = 'Pearl Harbor'),
(SELECT language_id FROM language WHERE name = 'English'),'One of the best movies I have seen',10,
'Pearl Harbor delivers an emotional and action-packed portrayal of love, friendship, and sacrifice against the backdrop of WWII, featuring stunning visuals and a gripping storyline.',
'2024-02-14 12:30:00'),
((SELECT film_id FROM new_film WHERE film_name = 'Dune'),
(SELECT language_id FROM language WHERE name = 'English'),'All people crazy about Dune, but I am not a big fan',7,
'While many rave about the visual spectacle and grandeur of Dune, I found it a bit too slow and overhyped for my taste. The pacing and world-building did not fully capture my interest as much as I hoped.',
'2023-10-10 18:24:30');
-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

DELETE FROM new_film WHERE film_name = 'Pearl Harbor';
SELECT * FROM customer_review;
-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- Answer: the review was also deleted.