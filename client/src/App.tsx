import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage';
import ResultsPage from './components/Results/ResultsPage';
import BusinessPage from './components/Business/BusinessPage';
import NotFoundPage from './components/NotFoundPage';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/biz/:alias" component={ BusinessPage } />
        <Route exact path="/search" component={ ResultsPage } />
        <Route exact path="/" component={ LandingPage } />
        <Route component={ NotFoundPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
