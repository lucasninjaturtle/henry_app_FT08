INSERT INTO users VALUES
    (1, 'marcos', 'grizzuti', 'marcos.grizzuti@gmail.com', 541112345678, 'hash', now(), now()),
    (2, 'qwe', 'qwe', 'qwe.qwe@gmail.com', 1111311111, 'hash', now(), now()),
    (3, 'asd', 'asd', 'asd.asd@gmail.com', 2222222222, 'hash', now(), now()),
    (4, 'zxc', 'zxc', 'zxc.zxc@gmail.com', 3333333333, 'hash', now(), now()),
    (5, 'rty', 'rty', 'rty.rty@gmail.com', 4444444444, 'hash', now(), now()),
    (6, 'fgh', 'fgh', 'fgh.fgh@gmail.com', 5555555555, 'hash', now(), now()),
    (7, 'vbn', 'vbn', 'vbn.vbn@gmail.com', 6666666666, 'hash', now(), now()),
    (8, 'uio', 'uio', 'uio.uio@gmail.com', 7777777777, 'hash', now(), now()),
    (9, 'jkl', 'jkl', 'jkl.jkl@gmail.com', 8888888888, 'hash', now(), now()),
    (10, 'nmh', 'nmh', 'nmh.nmh@gmail.com', 9999999999, 'hash', now(), now()),
    (11, 'ert', 'ert', 'ert.ert@gmail.com', 1010101010, 'hash', now(), now()),
    (12, 'dfg', 'dfg', 'dfg.dfg@gmail.com', 1111111111, 'hash', now(), now()),
    (13, 'xcb', 'xcb', 'xcb.xcb@gmail.com', 1212121212, 'hash', now(), now()),
    (14, 'njg', 'njg', 'njg.njg@gmail.com', 1313131313, 'hash', now(), now()),
    (15, 'hbr', 'bhr', 'bhr.bhr@gmail.com', 1414141414, 'hash', now(), now()),
    (16, 'qcs', 'qcs', 'qcs.qcs@gmail.com', 1515151515, 'hash', now(), now()),
    (17, 'sdy', 'sdy', 'sdy.sdy@gmail.com', 1161616161, 'hash', now(), now());

INSERT INTO admins VALUES
    (1, now(), now(), 1);

INSERT INTO instructors VALUES
    (1, 'qweqwe', now(), now(), 2),
    (2, 'asdasd', now(), now(), 3),
    (3, 'zxczxc', now(), now(), 4),
    (4, 'rtyrty', now(), now(), 5);

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
    (1, 'fghfgh', now(), now(), 6, 1),
    (2, 'vbnvbn', now(), now(), 7, 2),
    (3, 'uiouio', now(), now(), 8, 3),
    (4, 'jkljkl', now(), now(), 9, 4);

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
    (1, 'nmhnmh', now(), now(), 10, 1, 5),
    (2, 'ertert', now(), now(), 11, 1, 5),
    (3, 'dfgdfg', now(), now(), 12, 2, 5),
    (4, 'xcbxcb', now(), now(), 13, 2, 5),
    (5, 'njgnjg', now(), now(), 14, 3, 6),
    (6, 'bhrbhr', now(), now(), 15, 3, 6),
    (7, 'qcsqcs', now(), now(), 16, 4, 6),
    (8, 'sdysdy', now(), now(), 17, 4, 6);
