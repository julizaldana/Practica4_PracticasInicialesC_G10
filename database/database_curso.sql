CREATE DATABASE ng_curso_db;

USE ng_curso_db;

CREATE TABLE curso(
    codigo_curso VARCHAR(20),
    titulo_curso VARCHAR(180),
    creditos_curso INT(11),
    prerre_curso VARCHAR(255)
);

DESCRIBE curso;

CREATE TABLE publis(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user VARCHAR(20),
    curso_catedratico VARCHAR(180),
    mensaje VARCHAR(200),
    fecha VARCHAR(50)
);

DESCRIBE publis;

CREATE TABLE users(
    carne INT(11) NOT NULL PRIMARY KEY,
    nombres VARCHAR(50),
    apellidos VARCHAR(50),
    contraseña VARCHAR(50),
    correo VARCHAR(50),
    codicursos VARCHAR(50),
    credis INT(11)
);

DESCRIBE users;