import axios from 'axios';
//Post list
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const RESET_POSTS = 'RESET_POSTS';

export function fetchPosts() {
    console.log('fetch called');
    const request = axios({
        method: 'get',
        url: "https://jsonplaceholder.typicode.com/posts"
    });

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchPostsSuccess(posts) {
    console.log('success called');
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    };
}

export function fetchPostsFailure(error) {
    console.log('failed called');
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    };
}
