USE gateway_db;

INSERT INTO users (
    full_name,
    email,
    password,
    role
)
VALUES (
    'Admin',
    'admin@gateway.com',
    '$2b$10$hashedpassword',
    'admin'
);

INSERT INTO services (
    service_name,
    description,
    price
)
VALUES
(
    'Online Form Fillup',
    'Government and private online applications',
    50.00
),
(
    'Passport Photo',
    'Passport size photo printing',
    30.00
),
(
    'Computer Training',
    'Basic computer training course',
    500.00
);