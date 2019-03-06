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
    toggleRememberMe,
    resetState
} from '../Actions/LoginActions';
import loginPage from '../Components/AmeenLoginRedux';
import cookies from '../cookie'
const mapStateToProps = (state) => {
    //console.log("mapState to props state", state)
    //console.log('COKIEEEEE',cookies);
    return {
        email: state.login.email,
        password: state.login.password,
        remember: state.login.remember,
        submitted: state.login.submitted,
        loading: state.login.loading,
        isLoggedIn: state.login.isLoggedIn,
        invalidCredentials: state.login.invalidCredentials
    };
}
const mapDispatchToProps = (dispatch,thisState) => {
    return {
        resetState: () => {
            dispatch(resetState())
        },
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
            let temp = {...obj};
            dispatch(login(obj)).payload
                .then((response) => {
                    //console.log(obj);
                    //console.log("responseeeeeeeeeeeeee", response.data);
                    //console.log(response.data.status);
                    if (response.data.status === 'true') {
                        cookies.setCookie('webkeyzAccessToken', response.data.access_token, 1);
                        if(obj.remember=='true'){
                            cookies.setCookie('savedEmail', obj.email, 30);
                            cookies.setCookie('savedPassword', obj.password, 30);
                            cookies.setCookie('rememberMe', obj.remember, 30);
                        }
                        dispatch(loginSuccess());
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