const INITIAL_STATE = {
    postsList: {
        posts: [],
        error: null,
        loading: false
    }
};
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POSTS: // start fetching posts and set loading = true
            return {
                ...state,
                postsList: {
                    posts: [],
                    error: null,
                    loading: true
                }
            };
        case FETCH_POSTS_SUCCESS: // return list of posts and make loading = false
            return {
                ...state,
                postsList: {
                    posts: action.payload,
                    error: null,
                    loading: false
                }
            };
        case FETCH_POSTS_FAILURE: // return error and make loading = false
            error = action.payload || {
                message: action.payload.message
            }; //2nd one is network or server down errors
            return {
                ...state,
                postsList: {
                    posts: [],
                    error: error,
                    loading: false
                }
            };
        case RESET_POSTS: // reset postList to initial state
            return {
                ...state,
                postsList: {
                    posts: [],
                    error: null,
                    loading: false
                }
            };
        default:
            return state
    }
}