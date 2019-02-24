import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import LoginContainer from './Containers/AmeenLoginContainer'
import DashboardContainer from './Containers/AmeenDashboardContainer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/Login' component={LoginContainer} />
          <Route exact path='/Dashboard' component={DashboardContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
