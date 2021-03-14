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
