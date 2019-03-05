import axios from 'axios';
//Post list
export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const INVALID_LOGIN_ATTEMPT = 'INVALID_LOGIN_ATTEMPT';
export const LOGIN_ATTEMPT_SUCCESS = 'LOGIN_ATTEMPT_SUCCESS';
export const LOGIN_ATTEMPT_FAILURE = 'LOGIN_ATTEMPT_FAILURE';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const TOGGLE_REMEMBER = 'TOGGLE_REMEMBER';
export const RESET_STATE = 'RESET_STATE';


export function resetState() {

    return {
        type: RESET_STATE
    };
}

export function invalidLoginAttempt() {
    return {
        type: INVALID_LOGIN_ATTEMPT
    };
}

export function login(obj) {
    //console.log('fetch called');
    //console.log(JSON.stringify(obj));
    const request = axios.post('http://173.199.166.52/~wknode/api/api/login', obj);

    return {
        type: LOGIN_ATTEMPT,
        loading: true,
        payload: request
    };
}

export function loginSuccess() {
    //console.log('success called');
    return {
        type: LOGIN_ATTEMPT_SUCCESS,
        loading: false
    };
}

export function loginFailure(error) {
    //console.log('failed called');
    return {
        type: LOGIN_ATTEMPT_FAILURE,
        loading: false,
        errors: error
    };
}

export function changeEmail(newEmail) {
    //console.log('change Email called');
    return {
        type: CHANGE_EMAIL,
        newEmail: newEmail
    };
}

export function changePassword(newPass) {
    //console.log('change password called');
    return {
        type: CHANGE_PASSWORD,
        newPassword: newPass
    };
}

export function toggleRememberMe() {
    //console.log('remember me toggeled');
    return {
        type: TOGGLE_REMEMBER
    };
}