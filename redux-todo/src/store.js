import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
// import rootReducer from './reducers';
import PostsReducer from './PostsReducer'
import promise from 'redux-promise';
import logger from 'redux-logger';

let middlewares;
if (process.env.NODE_ENV !== 'production') {
    // if development let action appear in console.log
    middlewares = applyMiddleware(promise, logger);
} else {
    // if production
    middlewares = applyMiddleware(promise);
}
const composer = compose(middlewares);
// usually the reducer is the rootReducer where we previously grouped all the reducers into one using combine reducers
export default function () {
    return createStore(PostsReducer, composer);
}