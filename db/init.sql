CREATE SCHEMA didactik;

CREATE TABLE didactik.mentors (
  id SERIAL PRIMARY KEY,
  "username" text UNIQUE NOT NULL,
  "firstName" text NOT NULL,
  "lastName" text NOT NULL,
  "email" text UNIQUE NOT NULL,
  "phone" text NOT NULL,
  "availableStatus" boolean NOT NULL,
  "categories" text[] NOT NULL
);

COPY didactik.mentors
FROM '/docker-entrypoint-initdb.d/init_data.csv'
DELIMITER ','
QUOTE '"'
CSV;

ALTER SEQUENCE didactik.mentors_id_seq RESTART WITH 8;
