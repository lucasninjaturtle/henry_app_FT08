import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export const postLogin = (data) => {
  return axios.post("/auth/login/local", data).then((resp) => resp.data);
};
