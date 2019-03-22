import {
    combineReducers
} from 'redux';
import LoginReducer from './LoginReducer';
import DashboardReducer from './DashboardReducer';

const rootReducer = combineReducers({
    login: LoginReducer,
    dashboard: DashboardReducer
});

export default rootReducer;