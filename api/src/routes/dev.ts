import { Router } from "express";
const router = Router();
import axios from "axios";
import { db } from "../database/models/index";

type randomCompany = {
  id: number;
  uid: string;
  business_name: string;
  suffix: string;
  industry: string;
  catch_phrase: string;
  buzzword: string;
  bs_company_statement: string;
  employee_identification_number: string;
  duns_number: string;
  logo: string;
  type: string;
  phone_number: string;
  full_address: string;
  latitude: number;
  longitude: number;
};

const getRandomCompanies = async (amount = 1) => {
  const fetchingPromises = [];
  do {
    fetchingPromises.push(
      axios
        .get<randomCompany>(
          `https://random-data-api.com/api/company/random_company?size=${Math.min(
            amount,
            100
          )}`
        )
        .then((resp) => resp.data)
    );
    amount = Math.max(amount - 100, 0);
  } while (amount !== 0);
  return await Promise.all<randomCompany[]>(fetchingPromises).then((data) =>
    data.flat()
  );
};

type randomName = {
  id: number;
  uid: string;
  name: string;
  two_word_name: string;
  four_word_name: string;
  name_with_initials: string;
  name_with_middle: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  male_first_name: string;
  female_first_name: string;
  prefix: string;
  initials: string;
};

const getRandomNames = async (amount = 1) => {
  const fetchingPromises = [];
  do {
    fetchingPromises.push(
      axios
        .get<randomName>(
          `https://random-data-api.com/api/name/random_name?size=${Math.min(
            amount,
            100
          )}`
        )
        .then((resp) => resp.data)
    );
    amount = Math.max(amount - 100, 0);
  } while (amount !== 0);
  return await Promise.all<randomName[]>(fetchingPromises).then((data) =>
    data.flat()
  );
};

type randomNumber = {
  id: number;
  uid: string;
  number: number;
  leading_zero_number: string;
  decimal: number;
  normal: number;
  hexadecimal: string;
  positive: number;
  negative: number;
  non_zero_number: number;
  digit: number;
};

const getRandomNumbers = async (amount = 0) => {
  const fetchingPromises = [];
  do {
    fetchingPromises.push(
      axios
        .get<randomNumber>(
          `https://random-data-api.com/api/number/random_number?size=${Math.min(
            amount,
            100
          )}`
        )
        .then((resp) => resp.data)
    );
    amount = Math.max(amount - 100, 0);
  } while (amount !== 0);
  return await Promise.all<randomNumber[]>(fetchingPromises).then((data) =>
    data.flat()
  );
};

router.get("/demo/", async (req, res) => {
  // MODULES
  const modulesNames = [
    "Fundamentals",
    "Frontend",
    "Backend",
    "Database",
    "E-commerce",
    "Final Project"
  ];

  const modulesToCreateData = [];
  for (let i = 0; i < modulesNames.length; i++) {
    const startDay = new Date(2020, 2 + i, 17);
    modulesToCreateData.push({
      name: modulesNames[i],
      startDay: startDay,
      checkpointDay: new Date(
        startDay.getFullYear(),
        startDay.getMonth() + 1,
        startDay.getDay() + 26
      )
    });
  }

  const modules = await db.Module.bulkCreate(modulesToCreateData);

  // COHORTS
  const cohorts = [];
  const groups = [];
  const cohortNames = [
    "FT-01",
    "FT-02",
    "FT-03",
    "FT-04",
    "FT-05",
    "FT-06",
    "FT-07",
    "FT-08",
    "FT-09",
    "FT-10"
  ];

  const dates = [];
  for (let i = 0; i < cohortNames.length; i++) {
    const randomDay = ~~(Math.random() * 31);
    const date = new Date(2020, 2 + i, randomDay);
    dates.push(date);
  }

  for (let i = 0; i < cohortNames.length; i++) {
    const newCohort = await db.Cohort.create({
      name: cohortNames[i],
      startDay: dates[i]
    });

    // Ft09-g1
    for (let j = 0; j < 10; j++) {
      const groupNumber = j <= 9 ? "0" + j : j;
      const newGroup = await db.Group.create({
        name: cohortNames[i] + "-g" + groupNumber
      });
      await newGroup.setCohort(newCohort);
      groups.push(newGroup);
    }
    cohorts.push(newCohort);
  }

  // --------------

  modules[0].setCohorts([cohorts[0], cohorts[1], cohorts[2]]);
  modules[1].setCohorts([cohorts[3], cohorts[4], cohorts[5]]);
  modules[2].setCohorts([cohorts[6], cohorts[7], cohorts[8]]);
  modules[3].setCohorts([cohorts[9], cohorts[10], cohorts[11]]);
  modules[4].setCohorts([cohorts[12], cohorts[13], cohorts[14]]);
  modules[5].setCohorts([cohorts[15], cohorts[16], cohorts[17]]);

  const students = []; // 1000 students

  const amount = 1000;
  const numbers = await getRandomNumbers(+amount);
  const names = await getRandomNames(+amount);
  for (let i = 0; i < +amount; i++) {
    const { first_name, last_name, uid } = names[i];
    const { number } = numbers[i];
    const newUser = await db.User.create({
      cellphone: `${number}`,
      email: `${first_name.substr(0, 1)}-${uid.substr(0, 15)}@test.com`,
      lastName: last_name,
      name: first_name
    });
    const newStudent = await db.Student.create({
      github: `${first_name}-${uid.substr(0, 4)}`
    });
    await newUser.setStudent(newStudent);
    students.push(newStudent);
  }

  // ----------

  async function createPms() {
    const pms = [];
    const amount = groups.length;
    const numbers = await getRandomNumbers(+amount);
    const names = await getRandomNames(+amount);
    for (let i = 0; i < +amount; i++) {
      const { first_name, last_name, uid } = names[i];
      const { number } = numbers[i];
      const newUser = await db.User.create({
        cellphone: `${number}`,
        email: `${first_name.substr(0, 1)}-${uid.substr(0, 15)}@test.com`,
        lastName: last_name,
        name: first_name
      });
      const newPm = await db.ProjectManager.create({
        github: `${first_name}-${uid.substr(0, 4)}`
      });
      await newUser.setProjectmanager(newPm);
      await newPm.setGroup(groups[i]);
      pms.push(newPm);
    }
    return pms;
  }

  const pms = await createPms();

  async function createInstructors() {
    const instructors = [];
    const amount = cohorts.length;
    const numbers = await getRandomNumbers(+amount);
    const names = await getRandomNames(+amount);
    for (let i = 0; i < +amount; i++) {
      const { first_name, last_name, uid } = names[i];
      const { number } = numbers[i];
      const newUser = await db.User.create({
        cellphone: `${number}`,
        email: `${first_name.substr(0, 1)}-${uid.substr(0, 15)}@test.com`,
        lastName: last_name,
        name: first_name
      });
      const newInstructor = await db.Instructor.create({
        github: `${first_name}-${uid.substr(0, 4)}`
      });
      await newUser.setInstructor(newInstructor);
      await cohorts[i].setInstructor(newInstructor);
      instructors.push(newInstructor);
    }
    return instructors;
  }

  const instructors = await createInstructors();

  let studentToGroupI = 0;
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    for (let j = Math.max(0, studentToGroupI - 8); j < studentToGroupI; j++) {
      students[j].setGroup(group);
    }
    studentToGroupI += 8;
  }

  const eventTypes = [];

  eventTypes.push(await db.EventType.create({ name: "HenryTalk" }));
  eventTypes.push(await db.EventType.create({ name: "HenryCV" }));

  const events = [];
  for (let i = 0; i < 25; i++) {
    const first = [
      "Hablamos de",
      "Nos juntamos y hablamos de",
      "Hablaremos de",
      "Unite para hablar de",
      "Unite para el taller de",
      "Hablaremos de"
    ];
    const talks = ["las buenas practicas", "los tipos de algoritmos"];
    const cvs = ["como crear un buen CVs", "un tip para los cvs"];
    const talkType = Math.floor(Math.random() * 2) + 1;
    let type = 0;
    let name = first[~~Math.random() * first.length];
    if (talkType === 1) {
      type = 0;
      name += " " + talks[~~(Math.random() * talks.length)];
    } else {
      type = 1;
      name += " " + cvs[~~(Math.random() * cvs.length)];
    }
    const beginningDate = new Date(2020, 8, 5);
    let startDay = new Date();
    startDay = new Date(startDay.setDate(beginningDate.getDate() + 7 * i));
    const month = startDay.getMonth();
    const day = ~~(Math.random() * startDay.getDay() + i);
    const newStartDay = `${startDay.getFullYear()}-${
      month < 9 ? "0" + month : month
    }-${day < 9 ? "0" + day : day}`;

    const newEvent = await db.Event.create({
      name,
      startDay: newStartDay,
      link: "http://meet.google.com/was-hdfb-avx",
      startTime: "15:15",
      endTime: "16:30",
      description: "Va a estar con nosotros un invitado especial"
    });
    await newEvent.setEventType(eventTypes[type]);
    events.push(newEvent);
  }

  res.sendStatus(200);
});

router.post("/cohorts/:amount", async (req, res) => {
  const { amount } = req.params;
  const companies = await getRandomCompanies(+amount);
  for (let i = 0; i < +amount; i++) {
    const { business_name } = companies[i];
    await db.Cohort.create({ name: business_name, startDay: new Date() });
  }
  res.sendStatus(200);
});

router.post("/student/add/:amount", async (req, res) => {
  const { amount } = req.params;
  const numbers = await getRandomNumbers(+amount);
  const names = await getRandomNames(+amount);
  for (let i = 0; i < +amount; i++) {
    const { first_name, last_name, uid } = names[i];
    const { number } = numbers[i];
    const newUser = await db.User.create({
      cellphone: `${number}`,
      email: `${first_name.substr(0, 1)}-${uid.substr(0, 15)}@test.com`,
      lastName: last_name,
      name: first_name
    });
    const newStudent = await db.Student.create({
      github: `${first_name}-${uid.substr(0, 4)}`
    });
    await newUser.setStudent(newStudent);
  }
  res.sendStatus(200);
});

router.post("/pm/:amount", async (req, res) => {
  const { amount } = req.params;
  const numbers = await getRandomNumbers(+amount);
  const names = await getRandomNames(+amount);
  for (let i = 0; i < +amount; i++) {
    const { first_name, last_name, uid } = names[i];
    const { number } = numbers[i];
    const newUser = await db.User.create({
      cellphone: `${number}`,
      email: `${first_name.substr(0, 1)}-${uid.substr(0, 15)}@test.com`,
      lastName: last_name,
      name: first_name
    });
    const newPm = await db.ProjectManager.create({
      github: `${first_name}-${uid.substr(0, 4)}`
    });
    await newUser.setProjectmanager(newPm);
  }
  res.sendStatus(200);
});

router.post("/eventType/:amount", async (req, res) => {
  const { amount } = req.params;
  const names = await getRandomNames(+amount);
  await db.EventType.bulkCreate(
    names.map((name) => ({
      name: name.first_name + " " + name.uid.substr(0, 4)
    }))
  );
  res.sendStatus(200);
});

router.post("/instructor/:amount", async (req, res) => {
  const { amount } = req.params;
  const numbers = await getRandomNumbers(+amount);
  const names = await getRandomNames(+amount);
  for (let i = 0; i < +amount; i++) {
    const { first_name, last_name, uid } = names[i];
    const { number } = numbers[i];
    const newUser = await db.User.create({
      cellphone: `${number}`,
      email: `${first_name.substr(0, 1)}-${uid.substr(0, 15)}@test.com`,
      lastName: last_name,
      name: first_name
    });
    const newInstructor = await db.Instructor.create({
      github: `${first_name}-${uid.substr(0, 4)}`
    });
    await newUser.setInstructor(newInstructor);
  }
  res.sendStatus(200);
});

router.post("/module/:amount", async (req, res) => {
  const { amount } = req.params;

  const names = await getRandomNames(+amount);
  const today = new Date();
  const data = names.map((name) => ({
    name: name.first_name + " " + name.uid.substr(0, 4),
    startDay: today,
    checkpointDay: new Date(today.setMonth(today.getMonth() + 1))
  }));
  await db.Module.bulkCreate(data);
  res.sendStatus(200);
});

router.post("/class/:amount", async (req, res) => {
  const { amount } = req.params;
  const names = await getRandomNames(+amount);

  const data = names.map((name) => ({
    name: name.first_name + " " + name.uid.substr(0, 4),
    startDay: new Date(),
    githubRepo: "testGithubRepoLink",
    githubFeedback: "testGithubFeedbackLink",
    githubQuizLink: "testGHQuizLink",
    recordedVideoURL: "testVideoUrl"
  }));

  await db.Class.bulkCreate(data);
  res.sendStatus(200);
});

router.post("/admin/:amount", async (req, res) => {
  const { amount } = req.params;
  const numbers = await getRandomNumbers(+amount);
  const names = await getRandomNames(+amount);
  for (let i = 0; i < +amount; i++) {
    const { first_name, last_name, uid } = names[i];
    const { number } = numbers[i];
    const newUser = await db.User.create({
      cellphone: `${number}`,
      email: `${first_name.substr(0, 1)}-${uid.substr(0, 15)}@test.com`,
      lastName: last_name,
      name: first_name
    });
    const newAdmin = await db.Admin.create({});
    await newUser.setAdmin(newAdmin);
  }
  res.sendStatus(200);
});

router.post("/group/:amount", async (req, res) => {
  const { amount } = req.params;
  const names = await getRandomNames(+amount);
  await db.Group.bulkCreate(
    names.map((name) => ({
      name: name.first_name + " " + name.uid.substr(0, 4)
    }))
  );
  res.sendStatus(200);
});

router.get("/student/set/cohort/all", async (req, res) => {
  const cohorts = await db.Cohort.findAll();
  const randomIdx = () => ~~(Math.random() * cohorts.length);
  await db.Student.findAll().then((students) => {
    students.map(async (student) => {
      await student.setCohort(cohorts[randomIdx()]);
    });
  });
  res.sendStatus(200);
});

router.get("/student/set/group/all", async (req, res) => {
  const groups = await db.Group.findAll();
  const randomIdx = () => ~~(Math.random() * groups.length);
  await db.Student.findAll().then((students) => {
    students.map(async (student) => {
      await student.setGroup(groups[randomIdx()]);
    });
  });
  res.sendStatus(200);
});

router.get("/student/set/relations/:id", async (req, res) => {
  const { id } = req.params;

  const cohorts = await db.Cohort.findAll();
  const groups = await db.Group.findAll();
  const randomIdx = (thing) => ~~(Math.random() * thing.length);
  const student = await db.Student.findByPk(id);
  await student.setCohort(cohorts[randomIdx(cohorts)]);
  await student.setGroup(groups[randomIdx(groups)]);

  res.sendStatus(200);
});

router.get("/cohort/set/instructor/all", async (req, res) => {
  const cohorts = await db.Cohort.findAll();
  db.Instructor.findAll().then(async (instructors) => {
    const randomIdx = () => ~~(Math.random() * instructors.length);
    await cohorts.forEach((cohort) =>
      cohort.setInstructor(instructors[randomIdx()])
    );
  });
  res.sendStatus(200);
});

router.get("/cohort/set/module/all", async (req, res) => {
  const cohorts = await db.Cohort.findAll();
  db.Module.findAll().then(async (modules) => {
    const randomIdx = () => ~~(Math.random() * modules.length);
    await cohorts.forEach((cohort) => cohort.setModule(modules[randomIdx()]));
  });
  res.sendStatus(200);
});

router.get("/group/set/cohort/all", async (req, res) => {
  const cohorts = await db.Cohort.findAll();
  const randomIdx = () => ~~(Math.random() * cohorts.length);
  db.Group.findAll().then((groups) => {
    groups.map(async (group) => {
      await group.setCohort(cohorts[randomIdx()]);
    });
  });
  res.sendStatus(200);
});

router.get("/pm/set/group/all", async (req, res) => {
  const groups = await db.Group.findAll();
  const randomIdx = () => ~~(Math.random() * groups.length);
  db.ProjectManager.findAll().then((projectManagers) => {
    projectManagers.map(async (projectManager) => {
      await projectManager.setGroup(groups[randomIdx()]);
    });
  });
  res.sendStatus(200);
});

router.get("/class/set/module/all", async (req, res) => {
  const modules = await db.Module.findAll();
  const randomIdx = () => ~~(Math.random() * modules.length);
  db.Class.findAll().then((classes) => {
    classes.map(async (classData) => {
      await classData.setModule(modules[randomIdx()]);
    });
  });
  res.sendStatus(200);
});

export default router;
