CREATE DATABASE ng_user_db;

USE ng_user_db;

CREATE TABLE user(
    carne INT(11) NOT NULL PRIMARY KEY,
    nombres VARCHAR(50),
    apellidos VARCHAR(50),
    contraseña VARCHAR(50),
    correo VARCHAR(50),
);

DESCRIBE user;