// import { useState, useEffect } from 'react';
import Result from './Result';
import { ResultType } from 'myTypes';
import '../../../styles/Results.css';


const Results = ({ results }: { results: ResultType[] }) => {
  console.log(results);
  return (
    <div className="Results">
      { results !== [] 
      ? results.map((result: ResultType, idx: number) => <Result key={idx} number={idx} result={result}/>)
      : null
      }
    </div>
  )
}

export default Results;