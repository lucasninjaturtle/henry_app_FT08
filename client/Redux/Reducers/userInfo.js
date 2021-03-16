import {
    GET_USER_INFO,
    SET_USER_TOKEN,
} from '../constants'


let initialState = {
    usuario: {}
}


const userInfo = (state = initialState, action) => {

    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                usuario: action.payload,
            }
        case SET_USER_TOKEN:
            return {
                ...state,
                usuario: { ...state.usuario, githubToken: action.payload }
            }
    }
    return state;
}

export default userInfo;