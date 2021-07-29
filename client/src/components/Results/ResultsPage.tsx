import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import queryString from 'query-string';
import { getAutoSuggestions, getBusinesses } from '../../utilities/yelpAPI';
import Results from './ResultsComponents/Results'
import NavBar from '../NavBar/Navbar';

type TParams = { 
  location: string;
 }

const ResultsPage = ({ location }: RouteComponentProps<TParams>) => {
  const parsed = queryString.parse(location.search);
  const [queryLocation, setQueryLocation] = useState(parsed.location);

  console.log(parsed);

  return (
    <div className="ResultsPage">
      <NavBar />
      <Results />
    </div>
  )
}

export default ResultsPage;