
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
