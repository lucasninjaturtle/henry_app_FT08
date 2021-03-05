import axios from 'axios'
import { Linking } from 'react-native'
import {
    GET_USER_INFO,
} from '../constants'

export function getUserInfo(id) {
    return function (dispatch) {
        axios.get(`http://192.168.100.13:5000/user/1`)
            .then((res) => res.data )
            .then ( data => {
                dispatch({ type: GET_USER_INFO, payload:data})
            })
            .catch(error => alert(error))
    }
}