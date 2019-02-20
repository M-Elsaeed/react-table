import React, { Component } from 'react';
import './AmeenLogin.scss';

class Login extends Component {
    emailValid() {
        let emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/gi;
        return emailRegex.test(this.props.email);
    }
    passValid() {
        let passRegex = /^...+$/gi;
        return passRegex.test(this.props.password);
    }
    render() {
        return (
            <div className="ameen-login-component" >
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

                <form className="loginForm">

                    <div className="loginForm__formContainer">
                        {
                            this.props.submitted && (!this.emailValid() || !this.passValid()) ?
                                <div>
                                    {
                                        !this.emailValid() ?
                                            <div className="--alerting">
                                                <p>Email is invalid it has to be in the form ABC@XYZ.MN</p>
                                            </div>
                                            : undefined
                                    }
                                    {
                                        !this.passValid() ?
                                            <div className="--alerting">
                                                <p>Password is invalid minimum 3 charachters</p>
                                            </div>
                                            : undefined
                                    }
                                </div>
                                : undefined

                        }
                        {
                            (!this.props.submitted) && (this.props.email === '') ?
                                <input
                                    name="email"
                                    value={this.props.email}
                                    onChange={e => this.props.changeEmail(e.target.value)}
                                    placeholder="email"
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
                                        className="invalid"
                                        placeholder="email"
                                        type="email" />}


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
                                    className="invalid"
                                    placeholder="password"
                                    type="password" />
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
                                                "email": this.props.email, "password": this.props.password
                                            })
                                            :
                                            this.props.invalidLoginAttempt()
                                    }
                                    }
                                    className="loginButton">LOG IN</button>
                        }
                    </div>
                </form>
                <div>
                    {/* Ask if this is ok to do this to add space to the bottom of the page */}
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                </div>
            </div>
        );
    }
}

export default Login;
