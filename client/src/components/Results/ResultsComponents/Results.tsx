// import { useState, useEffect } from 'react';
import { ResultType } from 'myTypes';


const Results = ({ results }: { results: ResultType[] }) => {
  console.log(results);
  return (
    <div className="Results">
      Results
      { results !== [] 
      ? results.map((result: ResultType, idx: number) => <div key={idx}>{result.name}</div>)
      : null
      }
    </div>
  )
}

export default Results;