import React, { Component } from 'react';
import './AmeenDashboard.scss';
import './icons.scss';
import { Link } from 'react-router-dom'
class Dashboard extends Component {
    componentDidMount() {
    }
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
                    {/* Using Divs */}
                    <div>
                        <div className="--header-div">
                            <p>ID</p>
                            <p>Name</p>
                            <p>Email</p>
                            <p>Role</p>
                        </div>
                        <div className="--data-div">
                            <p>
                                1
                                </p>
                            <p className="--sky-blue">
                                Doaa Saleh
                                </p>
                            <p >
                                doaa.saleh@webkeyz.com
                                </p>
                            <p >
                                Adminstrator
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
