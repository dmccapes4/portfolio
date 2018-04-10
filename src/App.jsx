import React, { Component } from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import NavContainer from './components/nav/NavContainer'
import './style/nav.css'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <NavContainer />
          <Switch>
            <Route path="/" component="" />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App
