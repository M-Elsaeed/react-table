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
} from '../Actions/login-actions';
import loginPage from '../Components/ameen-login-redux';
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
        login: (obj) => {
            dispatch(login(obj))
                .then((response) => {
                    console.log('here')
                    console.log(response);
                    console.log(response.payload.status);
                    !response.error ?
                        dispatch(loginSuccess(response.payload.data)) :
                        dispatch(loginFailure(response.payload.data));
                });

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(loginPage);