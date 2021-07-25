import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type TParams = { alias: string };

const BusinessPage = ({ match, location }: RouteComponentProps<TParams>) => {
  return (<div>Business Page 
    <p><code>{JSON.stringify(match, null, 2)}</code></p>
    <p><code>{JSON.stringify(location, null, 2)}</code></p>
    </div>)
}

export default BusinessPage;