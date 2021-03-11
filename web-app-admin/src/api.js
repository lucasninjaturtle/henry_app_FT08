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