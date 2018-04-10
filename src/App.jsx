import React, { Component } from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import NavContainer from './components/nav/NavContainer'
import About from './components/about/About'
import ProjectContainer from './components/projects/ProjectContainer'
import ContactContainer from './components/contact/ContactContainer'
import './style/nav.css'
import './style/about.css'
import './style/projects.css'
import './style/contact.css'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <NavContainer />
          <Switch>
            <Route path="/projects" component={ProjectContainer} />
            <Route path="/contact" component={ContactContainer} />
            <Route path="/" component={About} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App
