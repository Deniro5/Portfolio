import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import "../scss/app.scss";
import Home from "./Home";
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Showcase from "./Showcase";

const history = createHistory();

const App = () => {
  const [current, setCurrent] = useState("");
  return (
    <Router history={history}>
      <div className='app-container'>
        <Header current={current} setCurrent={setCurrent} />
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => <Home {...props} setCurrent={setCurrent} />}
          />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/projects' component={Showcase} />
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
