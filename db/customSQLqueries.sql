

-- get single user info
select * from users where id = $x;

-- get books on haveread list for user

select * from haveread where user_id = $x;

-- change haveread to the appropriate list
select * from $y where user_id = $x
-- $y being the list currently being viewed/editted, $x being id of logged in user
