import {
    connect
} from 'react-redux'
import {
    login,
    invalidLoginAttempt,
    loginSuccess,
    loginFailure,
    changeEmail,
    changePassword,
    toggleRememberMe
} from '../Actions/LoginActions';
import loginPage from '../Components/AmeenLoginRedux';
const mapStateToProps = (state) => {
    console.log("mapState to props state", state)
    return {
        'email': state.login.email,
        'password': state.login.password,
        'remember': state.login.remember,
        'submitted': state.login.submitted,
        'loading': state.login.loading,
        'isLoggedIn': state.login.isLoggedIn
    };
}
const mapDispatchToProps = (dispatch) => {
    return {

        invalidLoginAttempt: () => {
            dispatch(invalidLoginAttempt())
        },
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
            dispatch(login(obj)).payload
                .then((response) => {
                    console.log("responseeeeeeeeeeeeee", response.data);
                    console.log(response.data.status);
                    if (response.data.status === 'true') {
                        localStorage.setItem('webkeyzAccessToken', response.data.access_token)
                        dispatch(loginSuccess(response.data.access_token));
                        // Navigate to dashboard after saving the token in a cookie.
                    } else {
                        dispatch(loginFailure(response.data.message));
                        // Show wrong email/password
                    }
                });

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(loginPage);