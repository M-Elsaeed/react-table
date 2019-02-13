import React, { Component } from 'react';
import Header from './Header';
import { Route,Switch } from 'react-router-dom'
class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Header} />
                <Route path='/roster' component={Header} />
                <Route path='/schedule' component={Header} />
            </Switch>
        );
    }
}
export default Main;