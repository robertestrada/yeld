import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage';
import ResultsPage from './components/Results/ResultsPage';
import NotFoundPage from './components/NotFoundPage';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/search" component={ ResultsPage } />
        <Route exact path="/" component={ LandingPage } />
        <Route component={ NotFoundPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
