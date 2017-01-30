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
