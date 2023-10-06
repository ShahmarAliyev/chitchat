CREATE TABLE users (
  id serial PRIMARY KEY,
  google_id VARCHAR(255) NOT NULL UNIQUE, -- Google OAuth user ID
  display_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT NOW(),
);
