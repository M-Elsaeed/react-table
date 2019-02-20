import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
// import rootReducer from './reducers';
import promise from 'redux-promise';
import logger from 'redux-logger';
import loginReducer from './Reducers/login-reducer';

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
    return createStore(loginReducer, composer);
}