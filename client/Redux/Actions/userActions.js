import axios from 'axios'
import { Linking } from 'react-native'
import {
    GET_USER_INFO,
    EDIT_USER_INFO,
    SET_USER_TOKEN,
    GET_USER_COHORT_ID,
    GET_USER_COHORT,
} from '../constants'
import { envTrucho } from '../../envTrucho'

export function getUserInfo(userId) {

    return function (dispatch) {
        axios.get(`http://${envTrucho.EXPO_HTTP_IP}:5000/user/student/${userId}`)
            .then((res) => res.data)
            .then(data => {
                dispatch({ type: GET_USER_INFO, payload: data })
            })
            .catch(error => console.log(error))
    }
}

export function getUserCohortId(cohortName) {
    return function (dispatch) {
        axios.get(`http://${envTrucho.EXPO_HTTP_IP}:5000/cohort/search?name=${cohortName}`)
            .then((res) => res.data)
            .then(data => {
                dispatch({ type: GET_USER_COHORT_ID, payload: data })
            })
            .catch(error => console.log(error))
    }
}

export function getUserCohort(cohortId) {
    return function (dispatch) {
        axios.get(`http://${envTrucho.EXPO_HTTP_IP}:5000/cohort/${cohortId}`)
            .then((res) => res.data)
            .then(data => {
                dispatch({ type: GET_USER_COHORT, payload: data })
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

export function setUserToken(userToken) {

    return { type: SET_USER_TOKEN, payload: userToken }

}