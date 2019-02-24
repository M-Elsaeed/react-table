import {
    FETCH,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from '../Actions/DashboardActions'

const INITIAL_STATE = {
    succeededFetching: false,
    attemptedFetching: false,
    failedFetching: false,
    loading: false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH:
            {
                return {
                    ...state,
                    attemptedFetching: true,
                    loading: true,
                    payload: action.payload
                }

            }
        case FETCH_SUCCESS:
            {

                return {
                    ...state,
                    succeededFetching: true,
                    attemptedFetching: false,
                    failedFetching: false,
                    loading: false,
                    users: action.users
                }
            }
        case FETCH_FAILURE:
            {
                return {
                    ...state,
                    succeededFetching: false,
                    attemptedFetching: false,
                    failedFetching: true,
                    loading: false
                }
            }
        default:
            return state
    }
}