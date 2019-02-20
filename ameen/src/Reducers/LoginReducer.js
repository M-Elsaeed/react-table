import {
    LOGIN_ATTEMPT,
    INVALID_LOGIN_ATTEMPT,
    LOGIN_ATTEMPT_SUCCESS,
    LOGIN_ATTEMPT_FAILURE,
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    TOGGLE_REMEMBER
} from '../Actions/LoginActions'

const INITIAL_STATE = {
    'email': '',
    'password': '',
    'remember': 'false',
    'submitted': false,
    'loading':false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case INVALID_LOGIN_ATTEMPT:
            {
                return {
                    ...state,
                    'submitted': true,
                }

            }
        case LOGIN_ATTEMPT:
            {

                return {
                    ...state,
                    'response': action.payload,
                    'loading':action.loading
                }
            }
        case LOGIN_ATTEMPT_SUCCESS:
            {
                // Navigate to dashboard page and save token in cookie or in state
                return {
                    ...state,
                    "token": action.tokens,
                    'loading':action.loading
                }
            }
        case LOGIN_ATTEMPT_FAILURE:
            {
                return {
                    ...state,
                    "errorResponse": action.errors,
                    'loading':action.loading
                }
            }
        case CHANGE_EMAIL:
            {
                return {
                    ...state,
                    "email": action.newEmail
                }
            }
        case CHANGE_PASSWORD:
            {
                return {
                    ...state,
                    "password": action.newPassword
                }
            }
        case TOGGLE_REMEMBER:
            {

                let newRemember = state.remember === "true";
                console.log("before toggle", newRemember);
                newRemember = !newRemember;
                newRemember = String(newRemember);
                console.log("after toggle", newRemember);
                return {
                    ...state,
                    "remember": newRemember
                }
            }
        default:
            return state
    }
}