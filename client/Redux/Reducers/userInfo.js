import {
    GET_USER_INFO,
} from '../constants'


let initialState = {
    usuario:[
        // name:'',
        // cohort:'',
        // user:'',
        // group:'',
        // lastname:'',
        // module:'',
        // pm:{},
        // startDay:'',
        // instructor:{},
    ]
}


const userInfo = (state = initialState, action ) =>{

        switch (action.type) {
            case GET_USER_INFO:
                return {
                    ...state,
                    usuario: action.payload,
                }
        }
        return state;

}

export default userInfo;