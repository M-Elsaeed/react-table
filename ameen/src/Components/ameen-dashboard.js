import React, { Component } from 'react';
import axios from 'axios';
import './ameen-dashboard.scss';
import './icons.scss';
import { Link } from 'react-router-dom'
class Dashboard extends Component {
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
            axios.post('http://173.199.166.52/~wknode/api/api/login', req)
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
            <div className="ameen-dashboard-component" >
                <div className="side-panel" >
                    <div className="side-panel__semi-circle" >
                        <div id="side-panel__blue" className="side-panel__blue"></div>
                        <div id="side-panel__logo" className="side-panel__logo"></div>
                    </div>
                    <div className="dashed-ellipse" >
                        <div id="dashed-ellipse__border" className="dashed-ellipse__border"></div>
                    </div>
                    <div className="solid-ellipse" >
                        <div id="solid-ellipse__border" className="solid-ellipse__border"></div>
                    </div>
                    <div className="side-panel__tabs" >
                        <Link to='Login' className="side-panel__tab --active" >
                            <p>
                                <i className="icon-User --float-left"><span > Users</span></i>
                                <i className="icon-Arrow --float-right --small-icon"></i>
                            </p>
                        </Link>
                        <Link to='Login' className="side-panel__tab" >
                            <p className="--inactive" >
                                <i className="icon-Askar --float-left"><span > Azkar</span></i>
                                <i className="icon-Arrow --float-right --small-icon"></i>
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="top-bar" >
                    <Link to='Login' className="top-bar__users" >
                        <i className="icon-User --float-left"></i> <span >&nbsp;3 Users</span>
                    </Link>
                    <Link to='Login' className="top-bar__add-btn" >
                        <i className="icon-Plus --float-left --small-icon"></i><span>&nbsp;Add User</span>
                    </Link>
                </div>
                <div className="user-side-bar" >
                    <div className="user-side-bar__img" ></div>
                    <div className="user-side-bar__hello"><span>Hello</span><br></br><span className="--sky-blue">M.Diab</span></div>
                </div>
                <div className="content" >

                    <table>
                        <tbody>
                            <tr>
                                <th className="--first" >ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th className="--last" >Role</th>
                            </tr>
                            <tr className="--data-row" >
                                <td className="--first" >
                                    1
                                </td>
                                <td >
                                    Doaa Saleh
                                </td>
                                <td >
                                    doaa.saleh@webkeyz.com
                                </td>
                                <td className="--last" >
                                    Adminstrator
                                </td>
                            </tr>
                            <tr className="--data-row" >
                                <td className="--first" >
                                    1
                                </td>
                                <td >
                                    Doaa Saleh
                                </td>
                                <td >
                                    doaa.saleh@webkeyz.com
                                </td>
                                <td className="--last" >
                                    Adminstrator
                                </td>
                            </tr>
                            <tr className="--data-row" >
                                <td className="--first" >
                                    1
                                </td>
                                <td >
                                    Doaa Saleh
                                </td>
                                <td >
                                    doaa.saleh@webkeyz.com
                                </td>
                                <td className="--last" >
                                    Adminstrator
                                </td>
                            </tr>
                            <tr className="--data-row" >
                                <td className="--first" >
                                    1
                                </td>
                                <td >
                                    Doaa Saleh
                                </td>
                                <td >
                                    doaa.saleh@webkeyz.com
                                </td>
                                <td className="--last" >
                                    Adminstrator
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Dashboard;
