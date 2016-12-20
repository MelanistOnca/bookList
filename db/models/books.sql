CREATE TABLE books (
  id SERIAL PRIMARY KEY UNIQUE,
  isbn13 varchar(13), -- may want to make this UNIQUE as well
  title varchar(30),
  publisher varchar(80)
  -- author FORMAT_OF_REFERENCED_FIELD references authors(FIELD FROM authors TABLE)
  -- i think im just going to include a varchar field for an author string, and disable searching by author for the moment. save me building out an entire author search section/join table/promise chain/store management DEALIE

  -- ,description text
  -- genre FORMAT_OF_REFERENCED_FIELD references genres(FIELD FROM genres TABLE) --this may need to be a separate join table since it's possible for multiple genres to apply to a book. can also have multiple authors, so that may need to be a specific join as well.
);
