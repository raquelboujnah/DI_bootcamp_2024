-- exercise 1
-- select name from language

-- select f.title, f.description, l.name
-- from film as f
-- join language as l 
-- on f.language_id = l.language_id

-- select f.title, f.description, l.name
-- from language as l
-- left join film as f on l.language_id = f.language_id

-- create table new_film2(
-- id serial primary key,
-- name varchar(50)
-- );

-- insert into new_film2(name) values
-- ('Back to the present'),
-- ('Alice in Awfulland'),
-- ('Harry Partter');

-- create table customer_review(
-- review_id serial primary key,
-- film_id integer references new_film2(id) on delete cascade,
-- language_id integer references language(language_id) on delete cascade,
-- title varchar(20),
-- score integer check(score between 1 and 10),
-- review_text text,
-- last_update date
-- );

-- insert into customer_review(film_id, language_id, score, review_text, last_update)
-- values
-- (
-- (select id from new_film2 where name = 'Back to the present' ),
-- (select language_id from language where name = 'English' ),
-- 9,
-- 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem est earum mollitia provident, nostrum eius reiciendis. Nihil sunt impedit ex error asperiores quam illum nesciunt quos! Assumenda quas aperiam sapiente.',
-- '2024/06/25'
-- ),
-- (
-- (select new_film_id from new_film2 where name = 'Alice in Awfulland'),
-- (select language_id from language where name = 'French'),
-- 8,
-- 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem est earum mollitia provident, nostrum eius reiciendis. Nihil sunt impedit ex error asperiores quam illum nesciunt quos! Assumenda quas aperiam sapiente.',
-- '2024/06/25'
-- ),
-- (
-- (select new_film_id from new_film2 where name = 'Harry Partter'),
-- (select language_id from language where name = 'Italian'),
-- 8,
-- 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem est earum mollitia provident, nostrum eius reiciendis. Nihil sunt impedit ex error asperiores quam illum nesciunt quos! Assumenda quas aperiam sapiente.',
-- '2024/06/25'
-- );

-- delete from new_film2 where name = 'Harry Partter'


-- exercise 2

-- update film 
-- set language_id = 4
-- where film.title = 'Alice Fantasia'

-- drop table customer_review

-- select count(*)
-- from rental
-- where return_date is NULL or return_date > current_date;

-- select f.title from film as f
-- join rental as r on r.film_id = r.film_id
-- where r.return_date is NULL or r.return_date > current_date;

-- select f.title, f.rental_rate 
-- from film as f
-- inner join inventory as i on f.film_id = i.film_id
-- left join rental as r on i.inventory_id = r.inventory_id
-- where r.return_date is NULL or r.return_date > current_date
-- order by f.rental_rate desc
-- limit 30

-- select f.title, a.actor_id, a.first_name, a.last_name, f.description
-- from film as f
-- inner join film_actor as fa on f.film_id = fa.film_id
-- inner join actor as a on fa.actor_id = a.actor_id
-- where (a.first_name = 'Penelope' and a.last_name = 'Monroe') and f.description like '%sumo wrestler%';
	
-- select * from film 
-- where length < 60 
-- 	and rating = 'R';

-- select f.title
-- from film as f
-- inner join inventory as i on f.film_id = i.film_id
-- inner join rental as r on i.inventory_id = r.inventory_id
-- inner join customer as c on r.customer_id = c.customer_id
-- where c.first_name = 'Matthew'
--   and c.last_name = 'Mahan'
--   and f.rental_rate > 4.00
--   and r.return_date between '2005-07-28' and '2005-08-01';

-- select f.title, f.description, f.replacement_cost
-- from film as f
-- inner join inventory as i on f.film_id = i.film_id
-- inner join  rental as r on i.inventory_id = r.inventory_id
-- inner join customer as c on r.customer_id = c.customer_id
-- where c.first_name = 'Matthew'
--   and c.last_name = 'Mahan'
--   and (lower(f.title) like '%boat%' or lower(f.description) like '%boat%')
--   and f.replacement_cost > 16;
