-- exercise 1
-- select rating, count(*) as film_count
-- from film
-- group by rating
-- order by rating

-- select * from film 
-- where (rating = 'G' or rating = 'PG-13') 
-- and length < 120 
-- and rental_rate < 3.00
-- order by title

-- update customer
-- set first_name = 'Raquel',
-- 	last_name = 'Boujnah',
-- 	email = 'raquelboujnah@gmail.com'
-- where first_name = 'Mary'


-- exercise 2
-- update students 
-- set birth_date = '1998/11/02'
-- where last_name = 'Benichou'

-- update students
-- set last_name = 'Guez'
-- where first_name = 'David'

-- delete from students
-- where first_name = 'Lea'

-- alter table students
-- add column math_grade integer

-- update students 
-- set math_grade = 80 
-- where id = 1

-- update students 
-- set math_grade = 90 
-- where id = 2 or id = 4

-- update students 
-- set math_grade = 40 
-- where id = 6

-- select count(*) from students where math_grade > 83

-- insert into students(first_name, last_name, birth_date, math_grade)
-- values
-- ('Omer', 'Simpson', '1980-10-03', 70)

-- select sum(math_grade) from students
