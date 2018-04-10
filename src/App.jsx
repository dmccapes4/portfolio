import React, { Component } from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import NavContainer from './components/nav/NavContainer'
import About from './components/about/About'
import './style/nav.css'
import './style/about.css'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <NavContainer />
          <Switch>
            <Route path="/" component={About} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App
