INSERT INTO users VALUES
    (1, 'marcos', 'grizzuti', 'marcos.grizzuti@gmail.com', 541137775964, 'hash', now(), now()),
    (2, 'Rodolfo', 'Estefania ', 'Rodolfo.Rodríguez@gmail.com', 541189775488, 'hash', now(), now()),
    (3, 'Manuel', 'Chen', 'Manuel.Chen@gmail.com', 541172411070, 'hash', now(), now()),
    (4, 'Aaron', 'Conde', 'Aaron.Conde@gmail.com', 541135909686, 'hash', now(), now()),
    (5, 'Axel', 'Arribas', 'Axel.Arribas@gmail.com', 541182501588, 'hash', now(), now()),
    (6, 'Juan', 'Rodrguez', 'Juan.Rodrguez@gmail.com', 541127964205, 'hash', now(), now()),
    (7, 'Roberto', 'Castillo', 'Roberto.Castillo@gmail.com', 541103526017, 'hash', now(), now()),
    (8, 'Jacobo', 'Catala', 'Jacobo.Catala@gmail.com', 541175693944, 'hash', now(), now()),
    (9, 'Jordi', 'Saiz', 'Jordi.Saiz@gmail.com', 541102914610, 'hash', now(), now()),
    (10, 'Gaizka', 'Ferreiro', 'Gaizka.Ferreiro@gmail.com', 541141681934, 'hash', now(), now()),
    (11, 'Martin', 'Sánchez', 'Martin.Sánchez@gmail.com', 541179525651, 'hash', now(), now()),
    (12, 'Bartolome', 'Soriano', 'Bartolome.Soriano@gmail.com', 541117126216, 'hash', now(), now()),
    (13, 'Jesus', 'Latorre', 'Jesus.Latorre@gmail.com', 541189878207, 'hash', now(), now()),
    (14, 'Luciano', 'Menendez', 'Luciano.Menendez@gmail.com', 541189397249, 'hash', now(), now()),
    (15, 'Gabriel', 'Quero', 'Gabriel.Quero@gmail.com', 541105916738, 'hash', now(), now()),
    (16, 'Marcelino', 'Andujar', 'Marcelino.Andujar@gmail.com', 541169978956, 'hash', now(), now()),
    (17, 'Luis', 'Juarez', 'Luis.Juarez@gmail.com', 541186574503, 'hash', now(), now());

INSERT INTO admins VALUES
    (1, now(), now(), 1);

INSERT INTO instructors VALUES
    (1, 'RodolfoRodríguez', now(), now(), 2),
    (2, 'ManuelChen', now(), now(), 3),
    (3, 'AaronConde', now(), now(), 4),
    (4, 'AxelArribas', now(), now(), 5);

INSERT INTO cohorts VALUES
    (1, 'Ft05', '01/12/2020', now(), now(), 1),
    (2, 'Ft06', '01/01/2021', now(), now(), 2),
    (3, 'Ft07', '01/02/2021', now(), now(), 3),
    (4, 'Ft08', '01/03/2021', now(), now(), 4),
    (5, 'Ft09', '01/04/2021', now(), now(), 1),
    (6, 'Ft10', '01/05/2021', now(), now(), 2);

INSERT INTO groups VALUES
    (1, 'Ft09-g1', now(), now(), 5),
    (2, 'Ft09-g2', now(), now(), 5),
    (3, 'Ft10-g1', now(), now(), 6),
    (4, 'Ft10-g2', now(), now(), 6);

INSERT INTO projectmanagers VALUES
    (1, 'JuanRodrguez', now(), now(), 6, 1),
    (2, 'RobertoCastillo', now(), now(), 7, 2),
    (3, 'JacoboCatala', now(), now(), 8, 3),
    (4, 'JordiSaiz', now(), now(), 9, 4);

INSERT INTO modules VALUES
    (1, 'Fundamentions', '01/04/2021', '13/04/2021', now(), now(), 6),
    (2, 'Frontend', '15/04/2021', '02/05/2021', now(), now(), 5),
    (3, 'Backend', '05/05/2021', '16/05/2021', now(), now(), 4),
    (4, 'Database', '19/05/2021', '23/05/2021', now(), now(), 3),
    (5, 'Ecommerce', '02/05/2021', '02/06/2021', now(), now(), 2),
    (6, 'FinalProyect', '06/06/2021', '06/07/2021', now(), now(), 1);

INSERT INTO classes VALUES
    (1, 'class11', '01/04/2021', 'link', 'link', 'link', 'link', now(), now(), 1),
    (2, 'class12', '02/04/2021', 'link', 'link', 'link', 'link', now(), now(), 1),
    (3, 'class21', '15/04/2021', 'link', 'link', 'link', 'link', now(), now(), 2),
    (4, 'class22', '16/04/2021', 'link', 'link', 'link', 'link', now(), now(), 2),
    (5, 'class31', '05/05/2021', 'link', 'link', 'link', 'link', now(), now(), 3),
    (6, 'class32', '06/05/2021', 'link', 'link', 'link', 'link', now(), now(), 3),
    (7, 'class41', '19/05/2021', 'link', 'link', 'link', 'link', now(), now(), 4),
    (8, 'class42', '18/05/2021', 'link', 'link', 'link', 'link', now(), now(), 4);

INSERT INTO students VALUES
    (1, 'GaizkaFerreiro', now(), now(), 10, 1, 5),
    (2, 'MartinSánchez', now(), now(), 11, 1, 5),
    (3, 'BartolomeSoriano', now(), now(), 12, 2, 5),
    (4, 'JesusLatorre', now(), now(), 13, 2, 5),
    (5, 'LucianoMenendez', now(), now(), 14, 3, 6),
    (6, 'GabrielQuero', now(), now(), 15, 3, 6),
    (7, 'MarcelinoAndujar', now(), now(), 16, 4, 6),
    (8, 'LuisJuarez', now(), now(), 17, 4, 6);

INSERT INTO "eventTypes" VALUES
    (1, 'HenryTalk', now(), now()),
    (2, 'HenryCV', now(), now());
