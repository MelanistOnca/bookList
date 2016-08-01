-- DROP TABLE if EXISTS _ CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY UNIQUE,
  f_name varchar(30),
  m_name varchar(30),
  l_name varchar(50),
  email varchar(80),
  zip varchar(5),
  password_digest text
);
CREATE TABLE books (
  id SERIAL PRIMARY KEY UNIQUE,
  title varchar(30),
  subtitle varchar(50),
  published date,
  description text
  -- author FORMAT_OF_REFERENCED_FIELD references authors(FIELD FROM authors TABLE)
  -- genre FORMAT_OF_REFERENCED_FIELD references genres(FIELD FROM genres TABLE) --this may need to be a separate join table since it's possible for multiple genres to apply to a book. can also have multiple authors, so that may need to be a specific join as well.
);
CREATE TABLE authors (
  id SERIAL PRIMARY KEY UNIQUE,
  full_name text,
  f_name varchar(30),
  m_name varchar(30),
  l_name varchar(50),
  website text,
  social_media text
);
CREATE TABLE genres (
  id SERIAL PRIMARY KEY UNIQUE,
  type text
);
CREATE TABLE store_brands (
  id SERIAL PRIMARY KEY UNIQUE,
  brand varchar(50),
  website text
);
CREATE TABLE physical_stores (
  id SERIAL PRIMARY KEY UNIQUE,
  zip varchar(5),
  street_address text,
  -- store_brand --this should probably be a separate model that is joined to a particular store location.
  inventory WHAT_FORMAT_IS_A_LIST --this is probably not something i keep in my DB, but run an ajax call to the store's/library's API
);
CREATE TABLE digital_stores (
  id SERIAL PRIMARY KEY UNIQUE,
  -- this may be redundant with the brand model, since that has the website?
  website text,
  inventory WHAT_FORMAT_IS_A_LIST  --this is probably not something i keep in my DB, but run an ajax call to the store's/library's API
);
CREATE TABLE formats (
  id SERIAL PRIMARY KEY UNIQUE,
  type varchar(15)
);
-- available may not fit as a model? has no data other than t/f
-- CREATE TABLE available (
--   is_available boolean
-- );
