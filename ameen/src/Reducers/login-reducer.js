import {
    LOGIN_ATTEMPT,
    LOGIN_ATTEMPT_SUCCESS,
    LOGIN_ATTEMPT_FAILURE,
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    TOGGLE_REMEMBER
} from '../Actions/login-actions'

const INITIAL_STATE = {
    'email': '',
    'password': '',
    'remember': 'true',
    'submitted': false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_ATTEMPT:
            {
                
                return {
                    ...state,
                    'submitted': true,
                    'response':action.payload
                }
            }
        case LOGIN_ATTEMPT_SUCCESS:
            {
                localStorage.setItem('token',action.tokens.body)
                // Navigate to dashboard page and save token in cookie or in state
                return {
                    ...state,
                    tokens: action.tokens
                }
            }
        case LOGIN_ATTEMPT_FAILURE:
            {
                return {
                    ...state,
                    errorResponse: action.payload
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
                newRemember = !newRemember;
                newRemember = String(newRemember);
                return {
                    ...state,
                    "remember": newRemember
                }
            }
        default:
            return state
    }
}