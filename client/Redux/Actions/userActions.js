import axios from 'axios'
import { Linking } from 'react-native'
import {
    GET_USER_INFO,
    EDIT_USER_INFO
} from '../constants'
import { envTrucho } from '../../envTrucho'

export function getUserInfo(userId) {

    return function (dispatch) {
        axios.get(`http://${envTrucho.EXPO_HTTP_IP}:5000/user/student/${userId}`)
            .then((res) => res.data)
            .then(data => {
                dispatch({ type: GET_USER_INFO, payload: data })
                console.log(data)
            })
            .catch(error => console.log(error))
    }
}

export function editUserInfo(id, input) {
    let { cellphone } = input
    return function (dispatch) {
        axios.put(`http://${envTrucho.EXPO_HTTP_IP}:5000/user/student/${id}`, { cellphone })
            .then(data =>
                dispatch({ type: EDIT_USER_INFO, payload: data })
            )
    }
        .catch(error => alert(error))
}