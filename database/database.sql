CREATE DATABASE ng_cursos_db;

USE ng_cursos_db;

CREATE TABLE curso(
    id INT(11) NOT NULL PRIMARY KEY,
    title VARCHAR(180),
    creditos INT(11),
    prerre VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE curso;