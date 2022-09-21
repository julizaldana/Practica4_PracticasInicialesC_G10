CREATE DATABASE ng_cursos_db;

USE ng_cursos_db;

CREATE TABLE curso(
    codigo_curso VARCHAR(20),
    titulo_curso VARCHAR(180),
    creditos_curso INT(11),
    prerre_curso VARCHAR(255),
);

DESCRIBE curso;