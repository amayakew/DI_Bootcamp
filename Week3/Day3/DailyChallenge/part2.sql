-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, 
-- author NOT NULL
CREATE TABLE book(
book_id SERIAL PRIMARY KEY,
title VARCHAR(100) NOT NULL,
author VARCHAR(100) NOT NULL
);

-- Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee

INSERT INTO book (title,author)
VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

-- Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE,
-- age. Make sure that the age is never bigger than 15 (Find an SQL method);
-- Insert those students:
-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14

CREATE TABLE student(
student_id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL UNIQUE,
age SMALLINT CHECK (age <= 15) NOT NULL
);

INSERT INTO student (name,age)
VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date

-- This table, is a junction table for a Many to Many relationship with the Book and Student tables :
-- A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table

CREATE TABLE library(
book_fk_id INTEGER NOT NULL,
student_fk_id INTEGER NOT NULL,
borrowed_date DATE NOT NULL,
PRIMARY KEY (book_fk_id, student_fk_id),
FOREIGN KEY (book_fk_id) REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (student_fk_id) REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021

INSERT INTO library (student_fk_id,book_fk_id,borrowed_date)
VALUES
((SELECT student_id FROM student WHERE name = 'John'),
(SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),'15/02/2022'),
((SELECT student_id FROM student WHERE name = 'Bob'),
(SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),'03/03/2021'),
((SELECT student_id FROM student WHERE name = 'Lera'),
(SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),'23/05/2021'),
((SELECT student_id FROM student WHERE name = 'Bob'),
(SELECT book_id FROM book WHERE title = 'Harry Potter'),'12/08/2021');

-- Display the data
-- Select all the columns from the junction table
SELECT * FROM library
-- Select the name of the student and the title of the borrowed books
SELECT student.name, book.title
FROM (student JOIN library ON student.student_id = library.student_fk_id)
JOIN book ON book.book_id = library.book_fk_id;
-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT AVG(student.age)
FROM (student JOIN library ON student.student_id = library.student_fk_id)
JOIN book ON book.book_id = library.book_fk_id
WHERE book.title = 'Alice In Wonderland';
-- Delete a student from the Student table, what happened in the junction table ?
-- Answer: as I deleted student from the parent table and in child table I have condition 
-- ON DELETE CASCADE - all information connected with this student will be deleted from child table
DELETE FROM student WHERE name = 'Bob';
SELECT * FROM library;
