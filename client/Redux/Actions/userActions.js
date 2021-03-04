import axios from 'axios'
import { Linking } from 'react-native'
import {
    GET_USER_INFO,
} from '../constants'

export function getUserInfo() {
    return function (dispatch) {
        axios.get('')
    }
}