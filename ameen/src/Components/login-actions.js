import axios from 'axios';
//Post list
export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const LOGIN_ATTEMPT_SUCCESS = 'LOGIN_ATTEMPT_SUCCESS';
export const LOGIN_ATTEMPT_FAILURE = 'LOGIN_ATTEMPT_FAILURE';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const TOGGLE_REMEMBER = 'TOGGLE_REMEMBER';

export function login() {
    console.log('fetch called');
    const request = axios({
        method: 'get',
        url: "https://jsonplaceholder.typicode.com/posts"
    });
    return {
        type: LOGIN_ATTEMPT,
        payload: request
    };
}

export function loginSuccess(response) {
    console.log('success called');
    return {
        type: LOGIN_ATTEMPT_SUCCESS,
        tokens: response
    };
}

export function loginFailure(error) {
    console.log('failed called');
    return {
        type: LOGIN_ATTEMPT_FAILURE,
        payload: error
    };
}

export function changeEmail(newEmail) {
    console.log('change Email called');
    return {
        type: CHANGE_EMAIL,
        newEmail: newEmail
    };
}

export function changePassword(newPass) {
    console.log('change password called');
    return {
        type: CHANGE_PASSWORD,
        newPassword: newPass
    };
}

export function toggleRememberMe() {
    console.log('remember me toggeled');
    return {
        type: TOGGLE_REMEMBER
    };
}

