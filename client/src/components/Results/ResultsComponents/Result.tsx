// import { useState, useEffect } from 'react';
import { ResultType } from 'myTypes';
import '../../../styles/Result.css';
import yeldData from '../../../data/yeldData';


const Result = ({ result }: { result: ResultType }) => {


  return (
    <div className="Result">
      <div className="Result__left">
        <div className="Result__image" style={{ backgroundImage: `url(${result.image_url})`}}/>
      </div>
      <div className="Result__right">
        <div className="Result__right-info">

        </div>
        <div className="Result__right-review">

        </div>
      </div>
    </div>
  )
}

export default Result;