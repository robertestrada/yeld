import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import queryString from 'query-string';
import { getBusinesses } from '../../utilities/yelpAPI';
import Results from './ResultsComponents/Results'
import NavBar from '../NavBar/Navbar';
import { getIP } from '../../utilities/ip';
import { ResultType, TParams } from 'myTypes';


const ResultsPage = ({ location: paramLocation }: RouteComponentProps<TParams>) => {
  const query = queryString.parse(paramLocation.search);
  const [userLocation, setUserLocation] = useState('');
  const [location, setLocation] = useState('');
  const [term, setTerm] = useState('');
  const [results, setResults] = useState<ResultType[]>([]);


  useEffect(() => {
    getIP()
      .then(res => {
        if (typeof res === 'object' && res !== null) {
          setUserLocation(`${res.city}, ${res.state}`);
        }
      })
      
    if (typeof query.location === 'string' && typeof query.term === 'string') {
      setLocation(query.location);
      setTerm(query.term);
    }
  }, []);

  useEffect(() => {
    if (location !== '') {
      getBusinesses(location, term)
      .then(res => {
        if (Array.isArray(res)) {
          setResults(res);
        }
      })
    }
  }, [location, term]);


  return (
    <div className="ResultsPage">
      <NavBar location={location} setLocation={setLocation} term={term} setTerm={setTerm} userLocation={userLocation} />
      <Results results={results} />
    </div>
  )
}

export default ResultsPage;