-- exercise 1
-- select * from items order by price
-- select * from items where price > 80 order by price desc 
-- select first_name, last_name from customer where id < 4 order by first_name
-- select last_name from customer order by last_name desc

--exercise 2
-- select * from customer

-- select concat(first_name, ' ', last_name) as full_name from customer 

-- select distinct create_date from customer

-- select * from customer order by first_name desc

-- select film_id, title, description, release_year, rental_rate from film order by rental_rate

-- select address, phone from address where district = 'Texas'

-- select * from film where film_id = 150 or film_id = 15

-- select film_id, title, description, length, rental_rate from film where title = 'Alice in Wonderland'

-- select film_id, title, description, length, rental_rate from film where title like 'Al%'

-- select title, rental_rate from film order by rental_rate limit 10

-- select title, rental_rate from film order by rental_rate offset 10 limit 10

-- select c.first_name, c.last_name, p.amount, p.payment_date
-- from customer as c
-- join payment as p on c.customer_id = p.customer_id
-- order by c.customer_id;

-- select f.*
-- from film as f
-- left join inventory as i on f.film_id = i.film_id
-- where i.film_id is null;

-- select ci.city, co.country
-- from city as ci
-- join country as co on ci.country_id = co.country_id;