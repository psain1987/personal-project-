CREATE TABLE car_user(
user_id SERIAL PRIMARY KEY,
email VARCHAR(150),
password VARCHAR(150)
);

CREATE TABLE cars(
cars_id SERIAL PRIMARY KEY,
year INT,
make VARCHAR(100),
model VARCHAR(100),
style VARCHAR(100),
price MONEY
);

---------------------------create favorites table with references-------------------------------------

INSERT INTO cars
(year, make, model, style, price)
VALUES
(2020, 'Ford', 'Raptor', 'Truck', 53000),
(2020, 'Volkswagen', 'GTI', 'Hatchback', 29000),
(2020, 'Honda', 'Civic', 'Sedan', 25000),
(2020, 'Chrysler', 'Pacifica', 'Mini Van', 34000),
(2020, 'Chevrolet', 'Corvetter', 'Coupe', 58000),
(2020, 'Mercedes', 'AMG GT R', 'Coupe', 163000),
(2020, 'Honda', 'Ridgeline', 'Truck', 34000),
(2020, 'Dodge', 'Challenger', 'Coupe', 35000),
(2020, 'Toyota', 'Corolla Hybrid ', 'Sedan', 23000),
(2020, 'Mazda', 'Miata MX-5', 'Coupe', 27000),
(2020, 'Mazda', 'CX-5', 'SUV', 31000),
(2020, 'Ford', 'Mustang Shelby GT350', 'Coupe', 60000),
(2020, 'Ferrari', 'F8 Tributo', 'Coipe', 276000),
(2020, 'BMW', 'M2 Competiton', 'Coupe', 59000),
(2020, 'Audi', 'Q8', 'SUV', 68000),
(2020, 'Hyundai', 'Veloster N', 'Hactchback Coupe', 28000),
(2020, 'Nissan', 'GT-R', 'Coupe', 113000),
(2020, 'RAM', '1500', 'truck', 33000),
(2020, 'Subaru', 'WRX STI', 'Sedan', 37000),
(2020, 'Porsche', '911', 'Copue', 99000);