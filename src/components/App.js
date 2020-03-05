import React, { Component } from 'react';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import '../scss/app.scss';
import Home from './Home';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Showcase from './Showcase';

const history = createHistory();



class App extends Component {



  
  render() {
    return (
      <Router history={history}>
      <div className="app-container">
      <Header/>
        <Switch>
          <Route exact path="/" component = {Home}/>
          <Route exact path="/about" component = {About}/>
          <Route exact path="/contact" component = {Contact}/>
          <Route exact path="/projects" component = {Showcase}/>
          />
        </Switch>
      </div>  
      </Router>
    );
  }
}

export default App;
