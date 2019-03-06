import React, { Component } from 'react';
import './AmeenLogin.scss';
import { Redirect } from 'react-router'

class Login extends Component {
    emailValid() {
        let emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/gi;
        return emailRegex.test(this.props.email);
    }
    passValid() {
        let passRegex = /^...+$/gi;
        return passRegex.test(this.props.password);
    }
    componentWillUnmount() {
        this.props.resetState();
    }
    render() {
        if (this.props.isLoggedIn) {
            return (
                <Redirect to="/dashboard" />);
        }
        return (
            <div className="ameen-login-component" >
                    {/* <div>
                        <div className="semicircle" >
                            <div id="semicircle__blue" className="semicircle__blue"></div>
                            <div id="semicircle__logo" className="semicircle__logo"></div>
                        </div>
                        <div className="dashed-ellipse" >
                            <div id="dashed-ellipse__border" className="dashed-ellipse__border"></div>
                        </div>
                        <div className="solid-ellipse" >
                            <div id="solid-ellipse__border" className="solid-ellipse__border"></div>
                        </div>
                    </div> */}
                <form className="loginForm">
                    <div className="loginForm__formContainer">
                        {
                            this.props.invalidCredentials && !this.props.loading ?
                                <div >username and password you added are not registered</div> : undefined
                        }
                        {

                            (!this.props.submitted) && (this.props.email === '') ?
                                <input
                                    name="email"
                                    value={this.props.email}
                                    onChange={e => this.props.changeEmail(e.target.value)}
                                    placeholder="username"
                                    type="email" />
                                : this.emailValid() ?
                                    <input
                                        name="email"
                                        value={this.props.email}
                                        onChange={e => this.props.changeEmail(e.target.value)}
                                        placeholder="email"
                                        type="email" /> :
                                    <input
                                        name="email"
                                        value={this.props.email}
                                        onChange={e => this.props.changeEmail(e.target.value)}
                                        placeholder="email"
                                        type="email" />}

                        {
                            this.props.submitted && !this.emailValid() && this.props.email !== '' ?
                                <div>
                                    <p>please enter valid format</p>
                                </div>
                                : undefined
                        }
                        {
                            this.props.submitted && !this.emailValid() && this.props.email == '' ?
                                <div>
                                    <p>please fill the field password username</p>
                                </div>
                                : undefined
                        }

                        {(!this.props.submitted) && (this.props.password === '') ?
                            <input
                                name="password"
                                value={this.props.password}
                                onChange={e => this.props.changePassword(e.target.value)}
                                placeholder="password"
                                type="password" /> :
                            this.passValid() ?
                                <input
                                    name="password"
                                    value={this.props.password}
                                    onChange={e => this.props.changePassword(e.target.value)}
                                    placeholder="password"
                                    type="password" /> :
                                <input
                                    name="password"
                                    value={this.props.password}
                                    onChange={e => this.props.changePassword(e.target.value)}
                                    placeholder="password"
                                    type="password" />
                        }
                        {
                            this.props.submitted && !this.passValid() && this.props.password !== '' ?
                                <div>
                                    <p>please enter valid format</p>
                                </div>
                                : undefined
                        }
                        {
                            this.props.submitted && !this.passValid() && this.props.password == '' ?
                                <div>
                                    <p>please fill the field password</p>
                                </div>
                                : undefined
                        }
                        <label>
                            {
                                this.props.remember === "true" ?
                                    <input
                                        checked
                                        name="remember"
                                        onChange={e => this.props.toggleRemember()}
                                        type="checkbox" /> :
                                    <input
                                        name="remember"
                                        onChange={e => this.props.toggleRemember()}
                                        type="checkbox" />
                            }
                            Remember Me
                        </label>
                        {
                            this.props.loading ?
                                // abc@dkf.com
                                <button
                                    onClick={e => e.preventDefault()}
                                    disabled
                                    style={{ cursor: "not-allowed" }}
                                    className="loginButton">Please Wait...
                                </button>
                                :
                                <button
                                    onClick={e => {
                                        e.preventDefault();
                                        (this.emailValid() && this.passValid()) ?
                                            this.props.login({
                                                "email": this.props.email, "password": this.props.password, "remember": this.props.remember
                                            })
                                            :
                                            this.props.invalidLoginAttempt()
                                    }
                                    }
                                    className="loginButton">LOG IN</button>
                        }
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
