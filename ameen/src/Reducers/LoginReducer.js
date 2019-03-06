import {
    LOGIN_ATTEMPT,
    INVALID_LOGIN_ATTEMPT,
    LOGIN_ATTEMPT_SUCCESS,
    LOGIN_ATTEMPT_FAILURE,
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    TOGGLE_REMEMBER,
    RESET_STATE
} from '../Actions/LoginActions'
import cookies from "../cookie";
const INITIAL_STATE = {
    email: cookies.getCookie('savedEmail'),
    password: cookies.getCookie('savedPassword'),
    remember: cookies.getCookie('rememberMe'),
    submitted: false,
    loading: false,
    isLoggedIn: false,//cookies.checkUserCookie(),
    invalidCredentials: false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case RESET_STATE:
            {
                return {
                    ...INITIAL_STATE
                }

            }
        case INVALID_LOGIN_ATTEMPT:
            {
                return {
                    ...state,
                    submitted: true
                }

            }
        case LOGIN_ATTEMPT:
            {
                return {
                    ...state,
                    response: action.payload,
                    loading: action.loading,
                    isLoggedIn: false,
                    submitted: true
                }
            }
        case LOGIN_ATTEMPT_SUCCESS:
            {
                // Navigate to dashboard page and save token in cookie or in state
                return {
                    ...state,
                    loading: action.loading,
                    isLoggedIn: true
                }
            }
        case LOGIN_ATTEMPT_FAILURE:
            {
                return {
                    ...state,
                    errorResponse: action.errors,
                    loading: action.loading,
                    isLoggedIn: false,
                    submitted: true,
                    invalidCredentials: true
                }
            }
        case CHANGE_EMAIL:
            {
                return {
                    ...state,
                    email: action.newEmail
                }
            }
        case CHANGE_PASSWORD:
            {
                return {
                    ...state,
                    password: action.newPassword
                }
            }
        case TOGGLE_REMEMBER:
            {

                let newRemember = state.remember === "true";
                //console.log("before toggle", newRemember);
                newRemember = !newRemember;
                newRemember = String(newRemember);
                //console.log("after toggle", newRemember);
                return {
                    ...state,
                    remember: newRemember
                }
            }
        default:
            return state
    }
}