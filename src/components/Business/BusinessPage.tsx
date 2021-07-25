import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type TParams = { alias: string };

const BusinessPage = ({ match }: RouteComponentProps<TParams>) => {
  return (<>Business Page {match.params.alias}</>)
}

export default BusinessPage;