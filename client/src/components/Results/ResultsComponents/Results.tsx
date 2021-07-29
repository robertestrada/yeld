// import { useState, useEffect } from 'react';
interface Result {
  name: string;
}


const Results = ({ results }: { results: Result[] }) => {
  console.log(results);
  return (
    <div className="Results">
      Results
      { results !== [] 
      ? results.map((result: Result, idx: number) => <div key={idx}>{result.name}</div>)
      : null
      }
    </div>
  )
}

export default Results;