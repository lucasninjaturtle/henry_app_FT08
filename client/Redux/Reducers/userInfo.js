import {
  GET_USER_INFO,
  SET_USER_TOKEN,
  GET_USER_COHORT_ID,
  GET_USER_COHORT
} from "../constants";

let initialState = {
  usuario: {},
  cohortId: "",
  cohort: {}
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        usuario: action.payload
      };
    case SET_USER_TOKEN:
      return {
        ...state,
        usuario: { ...state.usuario, githubToken: action.payload }
      };
    case GET_USER_COHORT_ID:
      return {
        ...state,
        cohortId: action.payload
      };
    case GET_USER_COHORT:
      return {
        ...state,
        cohort: action.payload
      };
  }
  return state;
};

export default userInfo;
