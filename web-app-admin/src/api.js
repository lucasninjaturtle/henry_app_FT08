import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

export const postLogin = (data) => {
  return axios.post("/auth/login/local", data);
};

export const createUserAndStudent = (data) => {
  return axios.post("/user/student", data);
};

export const createUserAndPm = (data) => {
  return axios.post("/user/projectmanager", data);
};

export const createGroup = (data) => {
  return axios.post("/group/", data);
};

export const createEvent = (data) => {
  return axios.post("/event/", data);
};

export const getEvents = () => {
  return axios.get("/event/").then((resp) => resp.data);
};

export const deleteEvents = (eventId) => {
  return axios.delete(`/event/${eventId}`).then((resp) => resp.data);
};

export const getEventById = (eventId) => {
  return axios.get(`/event/${eventId}`).then((resp) => resp.data);
};

export const searchEventsByName = (eventName) => {
  return axios
    .get(`/event/search?name=${eventName}`)
    .then((resp) => resp.data);
};

export const putEvent = (data, eventId) => {
  return axios.put(`/event/${eventId}`, data);
};

export const createCohort = (data) => {
  return axios.post("/cohort/", data);
};

export const createUserAndInstructor = (data) => {
  return axios.post("/user/instructor", data);
};

export const getCohorts = () => {
  return axios.get("/cohort").then((resp) => resp.data);
};

export const getCohortById = (id) => {
  return axios.get(`/cohort/${id}`).then((resp) => resp.data);
};

export const getInstructorById = (id) => {
  return axios.get(`/instructor/${id}`).then((resp) => resp.data);
};

export const getStudentsFromCohort = (cohortId) => {
  return axios.get(`/student/cohort/${cohortId}`).then((resp) => resp.data);
};

export const searchCohortsByName = (cohortName) => {
  return axios
    .get(`/cohort/search?name=${cohortName}`)
    .then((resp) => resp.data);
};

export const searchPmsByName = (pmName) => {
  return axios
    .get(`/projectmanager/search?name=${pmName}`)
    .then((resp) => resp.data);
};
export const searchEventTypesByName = (eventTypeName) => {
  return axios
    .get(`/eventType/search?name=${eventTypeName}`)
    .then((resp) => resp.data);
};

export const searchInstructorsByName = (instructorName) => {
  return axios
    .get(`/instructor/search?name=${instructorName}`)
    .then((resp) => resp.data);
};

export const searchModulesByName = (moduleName) => {
  return axios
    .get(`/module/search?name=${moduleName}`)
    .then((resp) => resp.data);
};

export const searchGroupsByName = (groupName) => {
  return axios.get(`/group/search?name=${groupName}`).then((resp) => resp.data);
};

export const putStudents = (data) => {
  return axios.put("/student/", data);
};
export const putInstructor = (data, id) => {
  return axios.put(`/instructor/${id}`, data);
};

export const putCohort = (data, id) => {
  return axios.put(`/cohort/${id}`, data);
};

export const createEventType = (data) => {
  return axios.post("/eventType/type/", data);
};

export const getEventsType = () => {
  return axios.get("/type/").then((resp) => resp.data);
};

export const deleteEventType = (eventTypeId) => {
  return axios.delete(`/event/${eventTypeId}`).then((resp) => resp.data);
};