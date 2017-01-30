-- i may be bypassing this for the moment to save on promise chain in book look up and trying to retrieve an author's info from my local DB

CREATE TABLE authors (
  id SERIAL PRIMARY KEY UNIQUE,
  full_name text
  -- ,f_name varchar(30),
  -- l_name varchar(50),
  -- website text,
  -- social_media text
);
