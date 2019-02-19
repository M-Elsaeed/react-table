import {
    connect
} from 'react-redux'
import {
    login,
    loginSuccess,
    loginFailure,
    changeEmail,
    changePassword,
    toggleRememberMe
} from './login-actions';
import loginPage from './ameen-login-redux';
const mapStateToProps = (state) => {
    return {
        'email': state.email,
        'password': state.password,
        'remember': state.remember,
        'submitted': state.submitted
    };
}
const mapDispatchToProps = (dispatch) => {
    return {

        changeEmail: (newEmail) => {
            dispatch(changeEmail(newEmail))
        },
        changePassword: (newPass) => {
            dispatch(changePassword(newPass))
        },
        toggleRemember: () => {
            dispatch(toggleRememberMe())
        },
        login: () => {
            dispatch(login())
                .then((response) => {
                    !response.error ?
                        dispatch(loginSuccess(response.payload.data)) :
                        dispatch(loginFailure(response.payload.data));
                });

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(loginPage);