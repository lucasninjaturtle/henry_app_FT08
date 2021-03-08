import { STATUS_CHANGE, LOADING } from "./constants";

  const initialState = {
    user: null,
    isLoading: false
  };
  
  var reducer = (state = initialState, action) => {
    switch (action.type) {
      case STATUS_CHANGE: {
        //state.formulario = action.form
        return state = { ...state, user: action.user };
      }
      case LOADING: {
        //state.formulario = action.form
        return state = { ...state, isLoading: action.loading };
      }
      default:
        return state;
    }
  };
  
export default reducer;