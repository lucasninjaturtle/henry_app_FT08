import {
    GET_USER_INFO,
} from '../constants'

export const getUserInfo = (payload) =>{
    return {
        type: GET_USER_INFO,
        payload
    }
}