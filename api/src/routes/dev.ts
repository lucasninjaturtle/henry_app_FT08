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

const getRandomCompany = () => {
  return axios
    .get<randomCompany>(
      "https://random-data-api.com/api/company/random_company"
    )
    .then((resp) => resp.data);
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

const getRandomName = () => {
  return axios
    .get<randomName>("https://random-data-api.com/api/name/random_name")
    .then((resp) => resp.data);
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

const getRandomNumber = () => {
  return axios
    .get<randomNumber>("https://random-data-api.com/api/number/random_number")
    .then((resp) => resp.data);
};

router.post("/cohorts/:amount", async (req, res) => {
  const { amount } = req.params;
  for (let i = 0; i < +amount; i++) {
    const { business_name } = await getRandomCompany();
    await db.Cohort.create({ name: business_name, startDay: new Date() });
  }
  res.sendStatus(200);
});

router.post("/student/add/:amount", async (req, res) => {
  const { amount } = req.params;
  for (let i = 0; i < +amount; i++) {
    const { first_name, last_name, uid } = await getRandomName();
    const { number } = await getRandomNumber();
    const newUser = await db.User.create({
      cellphone: `${number}`,
      email: `${first_name}@test.com`,
      lastName: last_name,
      name: first_name
    });
    const newStudent = await db.Student.create({
      github: `${first_name}-${uid.substr(0, 3)}`
    });
    await newUser.setStudent(newStudent);
  }
  res.sendStatus(200);
});

router.get("/student/set/cohort/all", async (req, res) => {
  const cohorts = await db.Cohort.findAll();
  const randomCohortIdx = () => ~~(Math.random() * cohorts.length);
  db.Student.findAll().then((students) => {
    students.map(async (student) => {
      await student.setCohort(cohorts[randomCohortIdx()]);
    });
  });
  res.sendStatus(200);
});

export default router;
