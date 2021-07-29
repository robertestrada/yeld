import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import queryString from 'query-string';
import { getBusinesses } from '../../utilities/yelpAPI';
import Results from './ResultsComponents/Results'
import NavBar from '../NavBar/Navbar';
import { getIP } from '../../utilities/ip';
import { ResultType, TParams } from 'myTypes';
import '../../styles/ResultsPage.css';


const ResultsPage = ({ location: paramLocation }: RouteComponentProps<TParams>) => {
  const query = queryString.parse(paramLocation.search);
  const [userLocation, setUserLocation] = useState('');
  const [location, setLocation] = useState('');
  const [term, setTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loadResults, setLoadResults] = useState(true);
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

  useEffect(() => {
    if (loadResults) {
      setLoadResults(false);
      getBusinesses(searchLocation, searchTerm)
      .then(res => {
        if (Array.isArray(res)) {
          setResults(res);
        }
      })
    }
  }, [loadResults]);


  return (
    <div className="ResultsPage">
      <NavBar 
        location={location} 
        term={term} 
        userLocation={userLocation} 
        searchLocation={searchLocation}
        setSearchLocation={setSearchLocation}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setLoadResults={setLoadResults}
      />
      <div className="ResultsPage__results">
        <Results results={results} />
      </div>
    </div>
  )
}

export default ResultsPage;