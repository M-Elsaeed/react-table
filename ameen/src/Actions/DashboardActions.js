import axios from 'axios';
//Post list
export const FETCH = 'FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export function fetch() {
    console.log('fetch called');
    const request = axios.post('http://173.199.166.52/~wknode/api/api/users', {
        "pageSize": 20,
        "pageIndex": 1
    }, {
        headers: {
            Authorization: localStorage.getItem('webkeyzAccessToken')
        }
    });
    return {
        type: FETCH,
        payload: request
    };
}

export function fetchSuccess(respData) {
    console.log('success called');
    return {
        type: FETCH_SUCCESS,
        users: respData
    };
}

export function fetchFailure() {
    console.log('failure called');
    return {
        type: FETCH_FAILURE,
    };
}