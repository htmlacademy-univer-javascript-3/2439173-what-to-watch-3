import { FilmType } from '../../types/film';

const BAD_RATING = 3;
const NORMAL_RATING = 5;
const GOOD_RATING = 8;
const VERY_GOOD_RATING = 10;

type PropsOverviewTab = {
  film: FilmType;
};

function getRatingLevel(rating: number): string {
  if (rating < BAD_RATING) {
    return 'Bad';
  }
  if (rating < NORMAL_RATING) {
    return 'Normal';
  }
  if (rating < GOOD_RATING) {
    return 'Good';
  }
  if (rating < VERY_GOOD_RATING) {
    return 'Very good';
  }
  return 'Awesome';
}

function OverviewTab(props: PropsOverviewTab): JSX.Element {
  const { film } = props;
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">
          {film.rating ? film.rating : '0'}
        </div>
        <p className="film-rating__meta">
          <span className="film-rating__level">
            {getRatingLevel(film.rating)}
          </span>
          <span className="film-rating__count">
            {film.scoresCount ? film.scoresCount : '0 ratings'}
          </span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{film.description}</p>
        {film.director && (
          <p className="film-card__director">
            <strong>Director: {film.director}</strong>
          </p>
        )}
        {film.starring && (
          <p className="film-card__starring">
            <strong>Starring: {film.starring.join(', ')} and other</strong>
          </p>
        )}
      </div>
    </>
  );
}

export default OverviewTab;
