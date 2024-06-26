/* Replace with your SQL commands */
CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    release_date DATE NOT NULL,
    imdb_rating FLOAT NOT NULL
);
