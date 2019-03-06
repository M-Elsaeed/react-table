import React, { Component } from 'react';
import './AmeenDashboard.scss';
import './icons.scss';
import { Link } from 'react-router-dom'
class Dashboard extends Component {
    componentDidMount() {
        this.props.fetch()
    }
    getNumberOfUsers() {
        return this.props.users ? this.props.users.usersNo : '';
    }
    isLoading() {
        console.log(this.props.loading);
        return this.props.loading;
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
                        <div className="side-panel__tab --active" >
                            <p>
                                <i className="icon-User --float-left"><span > Users</span></i>
                                <i className="icon-Arrow --float-right --small-icon"></i>
                            </p>
                        </div>
                        <div className="side-panel__tab" >
                            <p className="--inactive" >
                                <i className="icon-Askar --float-left"><span > Azkar</span></i>
                                <i className="icon-Arrow --float-right --small-icon"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="top-bar" >
                    <div className="top-bar__users" >
                        <i className="icon-User --float-left"></i> <span >&nbsp;{this.getNumberOfUsers()} Users</span>
                    </div>
                    <div className="top-bar__add-btn" >
                        <i className="icon-Plus --float-left --small-icon"></i><span>&nbsp;Add User</span>
                    </div>
                </div>
                <div className="user-side-bar" >
                    <div className="user-side-bar__img" ></div>
                    <div className="user-side-bar__hello"><span>Hello</span><br></br><span className="--sky-blue">M.Diab</span></div>
                </div>
                <div className="content" >
                    {/* Using Divs */}
                    <div>
                        <div className="--header-div">
                            <p>Users</p>
                            <input
                                id='filter'
                                placeholder="search"
                                onChange={
                                    (e) => {
                                        this.props.updateFilter(e.target.value);
                                    }
                                }
                                type="text" />
                        </div>
                        <div className="--header-div">
                            <p>ID</p>
                            <p>Name</p>
                            <p>Email</p>
                            <p>Role</p>
                        </div>


                        {
                            this.props.succeededFetching ? this.props.users.usersList
                                .filter((elem) => { return elem.fullName.includes(this.props.filter) })
                                .map((item, i) => {

                                    //console.log(item);
                                    return (
                                        <div key={i} className="--data-div">
                                            <p>
                                                {item.userID}
                                            </p>
                                            <p className="--sky-blue" >
                                                {item.fullName}
                                            </p>
                                            <p >
                                                {item.contactInfo}
                                            </p>
                                            <p >
                                                {item.role}
                                            </p>
                                        </div>
                                    )
                                }) : undefined
                        }
                        {
                            this.props.failedFetching && !this.props.succeededFetching ? <div className="" >Failed To fetch content</div> : undefined
                        }
                        {
                            this.props.failedFetching && this.props.succeededFetching ? <div className="" >No more Users!</div> : undefined
                        }
                        {
                            this.props.failedFetching && this.props.succeededFetching
                                ? undefined :
                                <button className="view-more"
                                    onClick={
                                        (e) => {
                                            e.preventDefault();
                                            this.props.fetch()
                                        }

                                    }
                                    disabled={this.isLoading()}>
                                    View More...
                                </button>
                        }


                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
