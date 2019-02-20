import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import LoginContainer from './Containers/AmeenLoginContainer'
import dashboard from './Components/AmeenDashboardRedux'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/LoginRedux' component={LoginContainer} />
          <Route exact path='/Dashboard' component={dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
