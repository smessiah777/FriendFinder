create database dog_db
 
USE dog_db

create table dog_profiles (
    id int not null auto_increment,
    dog_name VARCHAR(25) null,
    photo VARCHAR(255) null,
    scores VARCHAR(25) null,

    primary key (id)
);