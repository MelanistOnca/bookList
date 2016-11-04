
--user seeds
INSERT INTO users ( id, admin, f_name, m_name, l_name, email, username, password_digest ) values (1, true, 'firsty', 'middley', 'lasty', 'e@mail.com', 'nameOfUser', 'sdasdgASD233324ADnotactuallyadigest');

INSERT INTO users ( id, admin, f_name, m_name, l_name, email, username, password_digest ) values (2, false, 'secondy', 'centery', 'finally', 'a@b.com', 'fiftieth user', 'alsoNotACTUALLYaDigest2355w');

--book seeds
INSERT INTO books ( id, isbn13, title, publisher ) values ( 2, '1234567890987', 'GENERIC TITLE', 'Paid in exposure publishing');

INSERT INTO books ( id, isbn13, title, publisher ) values ( 320, '0987654321123', 'NON GENERIC TITLE', 'fuck Paid in exposure publishing');

--author seeds

INSERT INTO authors ( id, full_name ) values ( 3, 'john scalzi' );

INSERT INTO authors ( id, full_name ) values ( 5, 'kate elliot' );

--toberead seeds

INSERT INTO toberead (user_id, book_id) values ( 1,2 );

--haveread seeds

INSERT INTO haveread (user_id, book_id) values ( 2, 320 );

--currentlyreading seeds

INSERT INTO currentlyreading (user_id, book_id) values ( 1, 320 );
INSERT INTO currentlyreading (user_id, book_id) values ( 2,2 );
