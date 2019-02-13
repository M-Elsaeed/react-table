import React, { Component } from 'react';
import axios from 'axios';
import './ameen-login.css';

class Login extends Component {
    state = {
        'email': '',
        'password': '',
        'remember': 'true',
        'submitted': false
    }
    componentDidMount() {
    }
    change = e => {
        if (e.target.getAttribute('type') === 'checkbox') {
            let newCheck = String(!(this.state.remember === "true"))
            this.setState({
                [e.target.name]: newCheck
            });
        }
        else
            this.setState({
                [e.target.name]: e.target.value
            });
    };
    emailValid() {
        let emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/gi;
        return emailRegex.test(this.state.email);
    }
    passValid() {
        let passRegex = /^...+$/gi;
        return passRegex.test(this.state.password);
    }
    onSubmit = e => {
        e.preventDefault();
        //Do Something with the state
        this.setState({
            // 'email': '',
            // 'password': '',
            // 'remember': 'true',
            'submitted': true
        });
        if (this.emailValid() && this.passValid()) {
            let req = { 'email': this.state.email, 'password': this.state.password };
            axios.post('http://173.199.166.52/~wknode/api/api/login',req)
                .then(res => {
                    console.log(JSON.stringify(res.data))
                    console.log('logged in successfully');
                })
                .catch(err => {
                    console.log(err);
                })
        }
    };

    render() {
        return (
            <div>
                <div className="semi-container" >
                    <div id="top-semicircle" className="top-semicircle"></div>
                    <div id="logo-semicircle" className="logo-semicircle"></div>
                </div>
                <div className="dashed-container" >
                    <div id="dashed-semicircle" className="dashed-semicircle"></div>
                </div>
                <div className="solid-container" >
                    <div id="solid-semicircle" className="solid-semicircle"></div>
                </div>
                <form className="login-form">
                    <div className="form-container">
                        {
                            (!this.state.submitted) && (this.state.email === '') ?
                                <input
                                    name="email"
                                    value={this.state.email}
                                    onChange={e => this.change(e)}
                                    className="email-field"
                                    placeholder="email"
                                    type="email" />
                                : this.emailValid() ?
                                    <input
                                        name="email"
                                        value={this.state.email}
                                        onChange={e => this.change(e)}
                                        className="email-field"
                                        placeholder="email"
                                        type="email" /> :
                                    <input
                                        name="email"
                                        value={this.state.email}
                                        onChange={e => this.change(e)}
                                        className="email-field invalid"
                                        placeholder="email"
                                        type="email" />}


                        {(!this.state.submitted) && (this.state.password === '') ?
                            <input
                                name="password"
                                value={this.state.password}
                                onChange={e => this.change(e)}
                                className="password-field"
                                placeholder="password"
                                type="password" /> :
                            this.passValid() ?
                                <input
                                    name="password"
                                    value={this.state.password}
                                    onChange={e => this.change(e)}
                                    className="password-field"
                                    placeholder="password"
                                    type="password" /> :
                                <input
                                    name="password"
                                    value={this.state.password}
                                    onChange={e => this.change(e)}
                                    className="password-field invalid"
                                    placeholder="password"
                                    type="password" />
                        }
                        <label>
                            <input
                                checked={this.state.remember === "true"}
                                name="remember"
                                value={this.state.remember}
                                onChange={e => this.change(e)}
                                className="checkbox"
                                type="checkbox" />
                            Remember Me
                        </label>
                        <button
                            onClick={e => this.onSubmit(e)}
                            className="login-button">LOG IN</button>
                    </div>
                </form>
                <div>
                    <br></br><br></br><br></br><br></br>
                </div>
            </div>
        );
    }
}

export default Login;
