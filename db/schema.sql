create database dog_db
 
use dog_db

create table profiles (
    id int not null auto_increment,
    dog_name VARCHAR(25)  not null,
    photo VARCHAR(255) not null,
    scores VARCHAR(25) not null

    primary key (id)
)
