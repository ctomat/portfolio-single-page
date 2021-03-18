import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Nav from './components/molecules/nav/nav.component';
import Home from './pages/Home/Home.component';
import StackPage from './pages/StacksPage/StackPage.component';
import AboutMe from './pages/AboutMe/AboutMe.component';
import LetsStart from './pages/LetsStart/LetsStart.component';

import Wave from './components/atoms/Wave/Wave.component';

const App = () => {
  return (
    <AnimatePresence>
      <Router>
        <Nav />
        <Switch>
          <Route path='/start'>
            <LetsStart />
          </Route>
          <Route path='/about-me'>
            <AboutMe />
          </Route>
          <Route path='/stacks'>
            <StackPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Wave />
      </Router>
    </AnimatePresence>
  );
};

export default App;
