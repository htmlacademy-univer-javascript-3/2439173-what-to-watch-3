import { InnerReviewType } from '../../types/review';
import { REVIEWS } from '../../mocks/reviews';
import { FilmType } from '../../types/film';

const dateToString = function (date: Date) {
  const dateOld = new Date(date);
  const dateOldChange = new Date(dateOld.setMonth(dateOld.getMonth() - 1));
  const year = dateOldChange.toLocaleString('en-us', { year: 'numeric' });
  const month = dateOldChange.toLocaleString('en-us', { month: 'long' });
  const day = dateOldChange.toLocaleString('en-us', { day: 'numeric' });
  return `${month} ${day}, ${year}`;
};

function ReviewItem({text, date, author, rating}: InnerReviewType): JSX.Element{
  return(
    <div className="review">
      <blockquote className="review__quote">
        {text && <p className="review__text">{text}</p>}
        {(author || date) && (
          <footer className="review__details">
            {author && <cite className="review__author">{author}</cite>}
            {date && (
              <time
                className="review__date"
                dateTime={date.toISOString().split('T')[0]}
              >
                {dateToString(date)}
              </time>
            )}
          </footer>
        )}
      </blockquote>
      {rating && <div className="review__rating">{rating}</div>}
    </div>
  );
}

export type PropsReviewTab = {
    film: FilmType;
}

function ReviewsTab({ film }: PropsReviewTab): JSX.Element{
  const reviewsList = REVIEWS.filter(({ id }) => id === Number(film.id))[0].reviews;
  const reviewsListFirstColumn = reviewsList.slice(0, reviewsList.length / 2);
  const reviewsListSecondColumn = reviewsList.slice(
    reviewsList.length / 2,
    reviewsList.length,
  );

  return(
    reviewsList && (
      <div className="film-card__reviews film-card__row">
        {reviewsListFirstColumn && (
          <div className="film-card__reviews-col">
            {reviewsListFirstColumn.map((review) => (
              <ReviewItem
                key={`review_${film.id}_${review.author}`}
                {...review}
              />
            ))}
          </div>
        )}
        {reviewsListSecondColumn && (
          <div className="film-card__reviews-col">
            {reviewsListSecondColumn.map((review) => (
              <ReviewItem
                key={`review_${film.id}_${review.author}`}
                {...review}
              />
            ))}
          </div>
        )}
      </div>
    )
  );
}

export default ReviewsTab;
