DROP TABLE IF EXISTS lists;

CREATE TABLE IF NOT EXISTS lists (
    list_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    list_name VARCHAR(100) NOT NULL
);

DROP TABLE IF EXISTS tasks;

CREATE TABLE IF NOT EXISTS tasks (
    task_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    task_description VARCHAR(100) NOT NULL,
    list_id INT NOT NULL,
    task_date DATE NOT NULL DEFAULT CURRENT_DATE,
    is_complete BOOLEAN NOT NULL DEFAULT 'false',

    FOREIGN KEY(list_id)
    REFERENCES lists(list_id)
    ON DELETE CASCADE
);