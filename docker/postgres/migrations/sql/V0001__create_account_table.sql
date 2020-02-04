CREATE DATABASE supero_challenge
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE TABLE account(
   id serial PRIMARY KEY,
   name VARCHAR (50) NOT NULL,
   email VARCHAR (355) UNIQUE NOT NULL,
   password VARCHAR (255) NOT NULL,
   salt VARCHAR (50) NOT NULL,
   created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);