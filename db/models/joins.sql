-- this probably doesn't belong under models, but is here for quick ref
CREATE TABLE toberead (
  user_id INT REFERENCES users ON DELETE CASCADE,
  book_id INT REFERENCES books ON DELETE CASCADE,
  PRIMARY KEY (user_id, book_id)
);
CREATE TABLE haveread (
  user_id INT REFERENCES users ON DELETE CASCADE,
  book_id INT REFERENCES books ON DELETE CASCADE,
  PRIMARY KEY (user_id, book_id)
);
CREATE TABLE currentlyreading (
  user_id INT REFERENCES users ON DELETE CASCADE,
  book_id INT REFERENCES books ON DELETE CASCADE,
  PRIMARY KEY (user_id, book_id)
);
CREATE TABLE authorbookjoin (
  author_id INT REFERENCES authors ON DELETE CASCADE,
  book_id INT REFERENCES books ON DELETE CASCADE,
  PRIMARY KEY (user_id, book_id)
);

-- the PRIMARY KEY (a, b) should mean that multiple copies of a given join cannot be entered and should not exist
