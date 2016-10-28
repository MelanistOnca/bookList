
--user seeds
INSERT INTO users ( id, admin, f_name, m_name, l_name, email, username, password_digest ) values (1, true, 'firsty', 'middley', 'lasty', 'e@mail.com', 'nameOfUser', 'sdasdgASD233324ADnotactuallyadigest');

INSERT INTO users ( id, admin, f_name, m_name, l_name, email, username, password_digest ) values (2, false, 'secondy', 'centery', 'finally', 'a@b.com', 'fiftieth user', 'alsoNotACTUALLYaDigest2355w');

--book seeds
INSERT INTO books ( id, isbn13, title, publisher ) values ( 2, '1234567890987', 'GENERIC TITLE', 'Paid in exposure publishing');

INSERT INTO books ( id, isbn13, title, publisher ) values ( 320, '0987654321123', 'NON GENERIC TITLE', 'fuck Paid in exposure publishing');

--author seeds

INSERT INTO authors ( id, full_name ) values ( 3, 'john scalzi' );

INSERT INTO authors ( id, full_name ) values ( 5, 'kate elliot' );
