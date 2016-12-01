

-- get single user info
select * from users where id = $x;
select * from users where username = $x;

-- function test
-- CREATE OR REPLACE FUNCTION limitedUserInfo()
-- Returns
--
-- --pseudocode for what i want
-- select * from users where username = 'signupusername' RETURNING id, admin, f_name, m_name, l_name, email, username;
--
-- --RETURN attempt
-- select * from users where username = 'signupusername' RETURN {id|integer, admin|boolean, f_name|varchar(30), m_name|varchar(30), l_name|varchar(50), email|varchar(80), username|varchar(30)};
-- syntax error

-- function no longer needed, used delete theObject.key to remove the key-value pai i didnt want transmitting.

-- get single user info, return only part
select * from users where username = $x RETURNING


-- get books on haveread list for user

select * from haveread where user_id = $x;

-- change haveread to the appropriate list
select * from $y where user_id = $x
-- $y being the list currently being viewed/editted, $x being id of logged in user
