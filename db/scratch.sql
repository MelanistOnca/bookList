
-- user seed format

INSERT INTO users ( id, admin, f_name, m_name, l_name, email, username, password_digest ) values (  );


-- book seed format

INSERT INTO books ( isbn13, title, publisher ) values (  );

-- author seed format

INSERT INTO  ( id, full_name ) values ( 1, 'i wonder if i should use .split and .join to break author names down? probably as polish' );

-- to be read joins
INSERT INTO  (  ) values (  );

-- have read joins
INSERT INTO  (  ) values (  );

--currently reading join
INSERT INTO  (  ) values (  );

-- altering a table to add a column
ALTER TABLE books ADD COLUMN author varchar(80);

-- add data to this new column for a single book
UPDATE books SET author = 'No author creditted - notice courtesy of bookList team' WHERE id = 1;
UPDATE books SET author = 'Scalzi, John B.' WHERE id = 1;

-- https://www.postgresql.org/docs/9.1/static/sql-update.html
-- examples for updating values, and how to get return values
-- Adjust temperature entries and reset precipitation to its default value in one row of the table weather:
--
-- UPDATE weather SET temp_lo = temp_lo+1, temp_hi = temp_lo+15, prcp = DEFAULT
--   WHERE city = 'San Francisco' AND date = '2003-07-03';
-- Perform the same operation and return the updated entries:
--
-- UPDATE weather SET temp_lo = temp_lo+1, temp_hi = temp_lo+15, prcp = DEFAULT
--   WHERE city = 'San Francisco' AND date = '2003-07-03'
--   RETURNING temp_lo, temp_hi, prcp;
-- Use the alternative column-list syntax to do the same update:
--
-- UPDATE weather SET (temp_lo, temp_hi, prcp) = (temp_lo+1, temp_lo+15, DEFAULT)
--   WHERE city = 'San Francisco' AND date = '2003-07-03';

DELETE from $x WHERE book_id = $y RETURNING * from books WHERE book_id = $y; -- deletes from table x
