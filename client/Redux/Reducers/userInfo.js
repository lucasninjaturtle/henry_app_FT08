import {
    GET_USER_INFO,
} from '../constants'


let initialState = {
    user:'pepe',
    userInfo:{},
}


const userInfo = (state = initialState, action ) =>{

        switch (action.type) {
            case GET_USER_INFO:
                return [...state, action.payload]
        }
        return state;

}

export default userInfo;