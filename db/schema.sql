-- DROP TABLE if EXISTS _ CASCADE;
DROP TABLE if EXISTS users CASCADE;
DROP TABLE if EXISTS books CASCADE;
DROP TABLE if EXISTS authors CASCADE;
DROP TABLE if EXISTS toberead CASCADE;
DROP TABLE if EXISTS haveread CASCADE;
DROP TABLE if EXISTS currentlyreading CASCADE;

-- maybe break each table up into a separate file so that i can label them "models"
CREATE TABLE users (
  id SERIAL PRIMARY KEY UNIQUE,
  admin boolean,
  f_name varchar(30),
  m_name varchar(30),
  l_name varchar(50),
  email varchar(80),
  username varchar(30),
  password_digest text
);
CREATE TABLE books (
  id SERIAL PRIMARY KEY UNIQUE,
  isbn13 varchar(13), -- may want to make this UNIQUE as well
  title varchar(30),
  publisher varchar(80)
  -- author FORMAT_OF_REFERENCED_FIELD references authors(FIELD FROM authors TABLE)

  -- ,description text
  -- genre FORMAT_OF_REFERENCED_FIELD references genres(FIELD FROM genres TABLE) --this may need to be a separate join table since it's possible for multiple genres to apply to a book. can also have multiple authors, so that may need to be a specific join as well.
);
CREATE TABLE authors (
  id SERIAL PRIMARY KEY UNIQUE,
  full_name text
  -- ,f_name varchar(30),
  -- l_name varchar(50),
  -- website text,
  -- social_media text
);

CREATE TABLE toberead (
  user_id INT REFERENCES users ON DELETE CASCADE,
  book_id INT REFERENCES books ON DELETE CASCADE
);
CREATE TABLE haveread (
  user_id INT REFERENCES users ON DELETE CASCADE,
  book_id INT REFERENCES books ON DELETE CASCADE
);
CREATE TABLE currentlyreading (
  user_id INT REFERENCES users ON DELETE CASCADE,
  book_id INT REFERENCES books ON DELETE CASCADE
);
