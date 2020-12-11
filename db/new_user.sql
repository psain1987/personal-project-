INSERT INTO car_user
(email, password)
VALUES
($1, $2)
RETURNING email, user_id;