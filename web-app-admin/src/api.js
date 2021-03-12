import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

export const postLogin = (data) => {
  return axios.post("/auth/login/local", data).then((resp) => resp.data);
};

export const getCohorts = () => {
  return axios.get("/cohort").then((resp) => resp.data);
};

export const getCohortById = (id) => {
  return axios.get(`/cohort/${id}`).then((resp) => resp.data);
};

export const getStudentsFromCohort = (cohortId) => {
  return axios.get(`/student/cohort/${cohortId}`).then((resp) => resp.data);
};

export const searchCohortsByName = (cohortName) => {
  return axios
    .get(`/cohort/search?name=${cohortName}`)
    .then((resp) => resp.data);
};

export const searchInstructorsByName = (instructorName) => {
  return axios
    .get(`/instructor/search?name=${instructorName}`)
    .then((resp) => resp.data);
};

export const putStudents = (data) => {
  return axios.put("/student/", data);
};

export const createEvent = (data) => {
  return axios.post("/event", data);
};

export const editEvent = (id) => {
  return axios.put(`/event/${id}`);
};

export const deleteEvent = (id) => {
  return axios.delete(`/event${id}`);
};

export const allEvent = () => {
  return axios.get("/event")
}
export const putCohort = (data, id) => {
  return axios.put(`/cohort/${id}`, data);
};
