import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Login from './Components/ameen-login'
import LoginContainer from './Containers/ameen-login-container'
import Dashboard from './Components/ameen-dashboard'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Dashboard' component={Dashboard} />
          <Route exact path='/LoginRedux' component={LoginContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
