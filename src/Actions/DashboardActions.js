import axios from 'axios';
import cookies from '../cookie'
//Post list
export const PRE_FETCH = 'PRE_FETCH';
export const FETCH = 'FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const UPDATE_FILTER = 'UPDATE_FILTER';


export function preFetch() {
    //console.log('preFetch called');
    return {
        type: PRE_FETCH
    };
}

export function updateFilter(newFilter) {
    //console.log('preFetch called');
    return {
        type: UPDATE_FILTER,
        newFilter: newFilter
    };
}


let pageIndexCounter = 1;

export function fetch() {
    console.log('fetch called');
    const request = axios.post('http://173.199.166.52/~wknode/api/api/users', {
        "pageSize": 500,//20,
        "pageIndex": pageIndexCounter++
    }, {
        headers: {
            Authorization: cookies.getCookie('webkeyzAccessToken')
        }
    });
    console.log(pageIndexCounter);
    return {
        type: FETCH,
        payload: request
    };
}

export function fetchSuccess(respData) {
    //console.log('success called');
    return {
        type: FETCH_SUCCESS,
        users: respData
    };
}

export function fetchFailure() {
    //console.log('failure called');
    return {
        type: FETCH_FAILURE,
    };
}