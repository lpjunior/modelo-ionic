create table users(
	id bigint primary key auto_increment,
	nome varchar(150) not null,
	email varchar(250) not null,
	telefone varchar(20) not null
);

select * from users;

select * from users where id = 1;