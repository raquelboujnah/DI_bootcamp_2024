-- part 1

-- create table customer(
-- id serial primary key, 
-- first_name varchar(20),
-- last_name varchar(20) NOT NULL
-- );

-- create table customer_profil(
-- id serial primary key,
-- isLoggedIn boolean DEFAULT false,
-- customer_id integer references customer(id) unique
-- );

-- insert into customer(first_name, last_name)
-- values
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive');

-- insert into customer_profil(isLoggedIn, customer_id)
-- values
-- (
-- true,
-- (select id from customer where first_name = 'John')
-- ),
-- (
-- false,
-- (select id from customer where first_name = 'Jerome' )
-- );

-- select c.first_name, cp.isLoggedIn
-- from customer as c 
-- join customer_profil as cp on c.id = cp.customer_id

-- select count(*) 
-- from customer c
-- left join customer_profil cp 
-- on c.id = cp.customer_id
-- where cp.isLoggedIn = false OR cp.isLoggedIn IS NULL;



-- part 2

-- create table book(
-- book_id serial primary key,
-- title varchar(20) not null, 
-- author varchar(20) not null
-- );

-- insert into book(title, author)
-- values
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter',' J.K Rowling'),
-- ('To kill a mockingbir', 'Harper Lee');

-- create table student(
-- student_id serial primary key,
-- name varchar(50) not null unique,
-- age smallint
-- );

-- insert into student(name, age)
-- values
-- ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14);

-- create table library(
-- book_fk_id integer references book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- student_id integer references student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- borrowed_date date,
-- primary key (book_fk_id, student_id)
-- );


-- insert into library(book_fk_id, student_id, borrowed_date)
-- values
-- (
-- (select student_id from student where name = 'John'),
-- (select book_id from book where title = 'Alice In Wonderland'),
-- '2022/02/15'
-- ),
-- (
-- (select student_id from student where name = 'Bob'),
-- (select book_id from book where title = 'To kill a mockingbird'),
-- '2021/03/03'
-- ),
-- (
-- (select student_id from student where name = 'Lera'),
-- (select book_id from book where title = 'Alice In Wonderlan'),
-- '2023/05/21'
-- ),
-- (
-- (select student_id from student where name = 'Bob'),
-- (select book_id from book where title = 'Harry Potter'),
-- '2021/08/12'
-- );

-- select * from library

-- select s.name b.title
-- from library as l
-- join student as s on l.student_id = s.student_id
-- join book as b on l.book_fk_id = b.book_id;

-- select avg(s.age)
-- from library as l
-- join student as s on l.student_id = s.student_id
-- join book as b on l.book_fk_id = b.book_id
-- where b.title = 'Alice In Wonderland';

-- delete from student where name = 'John'