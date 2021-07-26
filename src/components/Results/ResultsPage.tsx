import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type TParams = { 
  location: string;
 }

const ResultsPage = ({ location }: RouteComponentProps<TParams>) => {

  return (<div>Results Page
    <p>
      <strong>Location Props: </strong>
      {JSON.stringify(location, null, 2)}
    </p>
  </div>)
}

export default ResultsPage;