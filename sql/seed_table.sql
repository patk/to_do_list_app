INSERT INTO lists (list_name)
VALUES
('Personal'),
('Work'),
('Study');

INSERT INTO tasks (task_description, list_id, task_date, is_complete)
VALUES 
('Buy groceries', 1, '2021-03-01', false),
('Pay electricity bill', 1, '2021-03-01', false),
('Pick up furniture', 1, '2021-03-01', false),
('Develop to-do list app', 2, '2021-03-01', false),
('Organise meeting with client', 2, '2021-03-01', false),
('Fix app bugs', 2, '2021-03-01', false),
('Do daily Duolingo lesson', 3, '2021-03-01', false),
('Learn jQuery', 3, '2021-03-01', false),
('Research API', 3, '2021-03-01', false);

