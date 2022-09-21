CREATE DATABASE ng_publis_db;

USE ng_publis_db;

CREATE TABLE publis(
    user VARCHAR(20),
    curso_catedratico VARCHAR(180),
    mensaje VARCHAR(200),
    fecha VARCHAR(50),
);

DESCRIBE publis;