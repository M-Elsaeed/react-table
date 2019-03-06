import {
    PRE_FETCH,
    FETCH,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from '../Actions/DashboardActions'

const INITIAL_STATE = {
    succeededFetching: false,
    failedFetching: false,
    loading: false,
    users: undefined
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case PRE_FETCH:
            {
                console.log('this was called');
                return {
                    ...state,
                    loading: true,

                }

            }
        case FETCH:
            {
                console.log('this was called');
                return {
                    ...state,
                    payload: action.payload
                }

            }
        case FETCH_SUCCESS:
            {
                let x;
                console.log(state.users)
                if (!state.users) {
                    console.log('error if')
                    x = [...action.users.usersList]

                } else {
                    console.log('error else')
                    x = [...state.users.usersList, ...action.users.usersList]
                }
                console.log(x)
                return {
                    ...state,
                    succeededFetching: true,
                    failedFetching: false,
                    loading: false,
                    users: {
                        ...action.users,
                        usersList: x
                    }
                }
            }
        case FETCH_FAILURE:
            {
                return {
                    ...state,
                    failedFetching: true,
                    loading: false
                }
            }
        default:
            return state
    }
}