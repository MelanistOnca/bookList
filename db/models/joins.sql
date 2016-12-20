-- this probably doesn't belong under models, but is here for quick ref
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
CREATE TABLE authorbookjoin (
  author_id INT REFERENCES authors ON DELETE CASCADE,
  book_id INT REFERENCES books ON DELETE CASCADE
);
