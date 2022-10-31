CREATE DATABASE IF NOT EXISTS `kingket`;
use `kingket`;
DROP TABLE IF EXISTS `users_profile`;
CREATE TABLE users_profile
	(
	id INT AUTO_INCREMENT UNIQUE,
    user_profile VARCHAR(20) NOT NULL
    );
LOCK TABLES `users_profile` WRITE;
INSERT INTO `users_profile` (`user_profile`) 
VALUES 
('customer'),
('admin');
UNLOCK TABLES;
DROP TABLE IF EXISTS `users`;

CREATE TABLE users
	(
	id INT AUTO_INCREMENT UNIQUE,
    user_name VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
    user_password VARCHAR(200) NOT NULL,
    avatar_url VARCHAR(200),
    user_profile INT ,
    PRIMARY KEY(id),
    FOREIGN KEY(user_profile) REFERENCES users_profile(id)
    );
LOCK TABLES `users` WRITE;
INSERT INTO `users` (`user_name`, `email`, `user_password`, avatar_url, user_profile) 
VALUES 
('santos','santosgonzalezpalau@gmail.com','$2a$10$xwRNZArWJ8.iLcuWocVcgODwyfzsG1EVJvilYNdiKzD5IGIfavC/m','avatar-1664902837282.jpg', 2),
('alejandro','alejandro@gmail.com','$2a$10$YOIbEttVk2tuEErliN94b.p5.M/IxkPGPKjlYhbUWZKU4usZ2sebq','avatar-1664914301935.jpg', 1),
('angel','angelangulo@gmail.com','$2a$10$gDj9RMqnXvFGEryjkREmlOlANvFNrXrFIsfBOiUjEuzG19nNkYIAm','avatar-1664917014289.jpg', 1),
('javier', 'javierzamorano@gmail.com', '$2a$10$no7rv4z4l8eZYt.puJh.FeQP/uYj.1BQYQttxg6LjmQWq4VvfPyOa', 'avatar-1664917067227.jpg', 1 ),
('Tomivega2', 'tomivega2@hotmail.com', '$2a$10$aDYNyoM9jV.7wkoV5m60wuGWNRG30flnhDDeHciXRArjEKaDACwVW', 'avatar-1665955874301.jpg', 1),
('tomi', 'santosgonzasslezpalau@gmail.com', '$2a$10$wMwCmtdipo3Ls5Yu9z2fG.W14yS.WHzAeSMFsGmq8xywMJoxnB5k2', 'avatar-1665961890473.jpg',1),
('santos', 'santosgonzalezpalau@hotmail.com', '$2a$10$5AXhJ2Y3uKdA1YLtUhIXOeq.b3bomuHS./F.UO2eY.OKD0kAnf3yy', 'avatar-1666186808951.jpg',1);
UNLOCK TABLES;


    
    
    
    DROP TABLE IF EXISTS `categories`;
CREATE TABLE categories
	(
    id INT UNIQUE AUTO_INCREMENT,
    category VARCHAR(20) NOT NULL,
    PRIMARY KEY(id)
    );
    DROP TABLE IF EXISTS `events_table`;
    
    
LOCK TABLES categories WRITE;
INSERT INTO categories(category) VALUES ('football'), ('basketball'), ('tennis');
UNLOCK TABLES ;
    
CREATE TABLE events_table
	(
    id INT UNIQUE AUTO_INCREMENT,
    organizer VARCHAR(100) NOT NULL,
    competence VARCHAR(100) NOT NULL,
    oponents VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    category_id INT NOT NULL,
    data_time DATETIME ,
    price MEDIUMINT UNSIGNED NOT NULL ,
    capacity MEDIUMINT UNSIGNED NOT NULL,
    image VARCHAR(200),
	game_description TEXT,
    PRIMARY KEY(id),
    FOREIGN KEY(category_id) REFERENCES categories(id)
    );
    DROP TABLE IF EXISTS `users_events`;
    
LOCK TABLES `events_table` WRITE;
INSERT INTO events_table (organizer, competence, oponents, location, category_id, data_time, price, capacity, image, game_description)
VALUES
('FIFA', 'Word cup Qatar 2022', 'Argentina vs Polonia', 'Estadio 974,Doha, Qatar', '1', '2022-11-30 21:00:00', '350', '50000', '1664934181777-futbol-argentina-vs-polonia.jpg', 'Ultimo partido del grupo C, entre la Argentina de Messi y Polonia de Lewandowsky.'),
('FIFA', 'Word cup Qatar 2022', 'Argentina vs Arabia Saudita', 'Estadio Iconico de lusail, All Daayen', '1', '2022-11-22 18:00:00', '350', '35000', '1664934341916-futbol-argentina-vs-arabiaSaudita.jpg', 'Primer partido del grupo C.'),
('FIFA', 'Word cup Qatar 2022', 'Argentina vs Mexico', 'Estadio Iconico de lusail, All Daayen', '1', '2022-11-27 03:00:00', '350', '35000', '1664934475379-futbol-argentina-vs-mexico.jpg', 'Segunda fecha del grupo C, entre los Argentinos y los Mexicanos'),
('AFA', 'Futbol de Primera Division', 'River vs Velez', 'Estadio Monumental, Bsas, Argentina', '1', '2022-11-01 21:00:00', '200', '65000', '1664934671360-futbol-river-vs-velez.jpg', 'Penultima fecha del torneo argentino'),
('ATP', 'Wimbledon', 'Novoak Djokovic vs Jannik Sinner', 'Londres, Inglaterra', '3', '2022-10-31 21:00:00', '450', '20000', '1664934831000-tenis-novac-vs-jannik.jpg', 'Cuartos de final del grand Slam de Londres'),
('ATP', 'Wimbledon', 'Nadal vs Botic', 'Londres, Inglaterra', '3', '2022-11-02 01:15:00', '450', '20000', '1664934938744-tenis-nadal-vs-botic.jpg', 'Cuartos de final por el torneo wimbledon'),
('NBA', 'NBA', 'Golden State Warriors vs L.A Lakers', 'Estadio Chase Center, San Francisco, California', '2', '2022-12-14 03:00:00', '560', '35000', '1664935034936-basketball-nba-golden-vs-lakers.png', 'Jornada 14 de la conferencia oeste'),
('NBA', 'NBA', 'Boston Celtics vs New York Knicks', 'Madison square garden, Nueva York', '2', '2022-11-17 01:30:00', '780', '45000', '1664935119109-basketball-nba-knicks-vs-celtics.png', 'Jornada 16 de la conferencia este'),
('NBA', 'NBA', 'Orlando magics vs Miami Heats', 'Hard Rock Stadium, Miami, Florida', '2', '2022-11-09 00:00:00', '650', '30000', '1664935367697-basketball-nba-magic-vs-heat.png', 'Jornada 16 de la conferencia este')
;
UNLOCK TABLES;


CREATE TABLE users_events (
	id INT UNIQUE AUTO_INCREMENT,
    user_id INT NOT NULL,
    event_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (event_id) REFERENCES events_table(id)
	);
    DROP TABLE IF EXISTS `carts`;

LOCK TABLES `users_events` WRITE;
INSERT INTO `users_events`(user_id, event_id)
VALUES 
( '3', '1'),
( '1', '1'),
( '2', '1'),
( '4', '1'),
( '1', '5'),
( '3', '5'),
( '2', '6'),
( '4', '8'),
( '3', '9');
UNLOCK TABLES;

    
    
CREATE TABLE carts (
	id INT AUTO_INCREMENT UNIQUE,
    user_id INT NOT NULL,
    event_id INT NOT NULL,
	quantity TINYINT UNSIGNED NOT NULL,
    total_price MEDIUMINT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (event_id) REFERENCES events_table(id)
);
LOCK TABLES carts WRITE;
INSERT INTO `carts` (`user_id`, `event_id`, `quantity`, `total_price`)
 VALUES
('3', '1', '3', '300'),
('1', '1', '2', '200'),
('2', '1', '1', '100'),
('4', '1', '5', '500'),
('1', '5', '10', '1000'),
('2', '6', '1', '300'),
('3', '5', '2', '200'),
('4', '8', '1', '250'),
('3', '9', '1', '75');
UNLOCK TABLES;