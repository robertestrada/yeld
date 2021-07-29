import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import queryString from 'query-string';
import { getAutoSuggestions, getBusinesses } from '../../utilities/yelpAPI';
import Results from './ResultsComponents/Results'
import NavBar from '../NavBar/Navbar';
import { getIP } from '../../utilities/ip';


type TParams = { 
  location: string;
}

interface Result {
  name: string;
}

const ResultsPage = ({ location: paramLocation }: RouteComponentProps<TParams>) => {
  const query = queryString.parse(paramLocation.search);
  
  const [userLocation, setUserLocation] = useState('');
  const [location, setLocation] = useState('');
  const [term, setTerm] = useState('');
  const [results, setResults] = useState<Result[]>([]);


  useEffect(() => {
    getIP()
      .then(res => {
        if (typeof res === 'object' && res !== null) {
          setUserLocation(`${res.city}, ${res.state}`);
        }
      })
  }, []);

  useEffect(() => {
    if (userLocation !== '') {
      setLocation(userLocation);
      getBusinesses(userLocation, term)
      .then(res => {
        if (Array.isArray(res)) {
          setResults(res);
        }
      })
    }
  }, [userLocation]);


  return (
    <div className="ResultsPage">
      <NavBar location={location} setLocation={setLocation} term={term} setTerm={setTerm} userLocation={userLocation} />
      <Results results={results} />
    </div>
  )
}

export default ResultsPage;