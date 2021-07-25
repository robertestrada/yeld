import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage';
import Results from './components/Results/ResultsPage';
import BusinessPage from './components/Business/BusinessPage';
import NotFoundPage from './components/NotFoundPage';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/biz/:alias" render={ () => <BusinessPage /> } />
        <Route path="/search" render={ () => <Results /> } />
        <Route path="/" exact render={ () => <LandingPage /> } />
        <Route render={() => <NotFoundPage />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
