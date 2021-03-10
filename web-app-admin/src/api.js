import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

export const postLogin = (data) => {
  return axios.post("/auth/login/local", data).then((resp) => resp.data);
};

export const getCohorts = () => {
  return axios.get("/cohort").then((resp) => resp.data);
};

export const getStudentsFromCohort = (cohortId) => {
  return axios.get(`/student/cohort/${cohortId}`).then((resp) => resp.data);
};

export const searchCohortsByName = (cohortName) => {
  return axios
    .get(`/cohort/search?name=${cohortName}`)
    .then((resp) => resp.data);
};

export const putStudents = (data) => {
  return axios.put("/student/", data);
};
