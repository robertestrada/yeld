import { ResultType } from 'myTypes';
import '../../../styles/Result.css';


const Result = ({ result, number }: { result: ResultType, number: number }) => {

  return (
    <div className="Result">
      <div className="Result__left">
        <div className="Result__image" style={{ backgroundImage: `url(${result.image_url})`}}/>
      </div>
      <div className="Result__right">
        <div className="Result__right-info">
          <div className="Result__info-left">
            <div className="Result__title">
              <strong>{`${number + 1}. ${result.name}`}</strong>
            </div>
            <div className="Result__rating">
              <em>{`Rating: ${result.rating}`}</em>
            </div>
            <div className="Result__reviews">
              <em>{`${result.review_count.toLocaleString()} Reviews`}</em>
            </div>
            <div className="Result__info-subline">
              <div className="Result__price">
                {`${result.price}`}&nbsp;&nbsp;•&nbsp;&nbsp;
              </div>
              <div className="Result__categories">
                {`${result.categories.map((category, idx) => {
                    return ` ${category.title}`;
                })}`}
              </div>
            </div>
          </div>
          <div className="Result__info-right">
            <div className="Result__phone">
              {`(${result.phone.slice(2, 5)}) ${result.phone.slice(5, 8)}-${result.phone.slice(8)}`}
            </div>
            <div className="Result__address">
              {`${result.location.address1}`}
            </div>
            <div className="Result__city">
              {`${result.location.city}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result;