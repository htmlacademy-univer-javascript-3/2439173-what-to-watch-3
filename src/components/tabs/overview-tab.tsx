import { FilmType } from '../../types/film';

type PropsOverviewTab = {
    film: FilmType;
};

const getNameRating = function (rating: string) {
  const ratingNumber = parseFloat(rating.replace(',', '.'));
  switch (true) {
    case ratingNumber > 8:
      return 'Very good';
    default:
      return '';
  }
};

const MAX_NAMES_WITHOUT_ETC = 4;
const starringToStringRow = function (starring: string[]) {
  return starring
    .slice(0, Math.min(MAX_NAMES_WITHOUT_ETC, starring.length))
    .join(', ')
    .concat(starring.length > MAX_NAMES_WITHOUT_ETC ? ' and other' : '');
};

function OverviewTab({film}: PropsOverviewTab): JSX.Element{
  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating ? film.rating : '0'}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getNameRating(film.rating ? film.rating : '0')}</span>
          <span className="film-rating__count">{film.ratingCount ? film.ratingCount : '0 ratings'}</span>
        </p>
      </div>
      <div className="film-card__text">
        {film.annotation?.map((annotationItem, index) => (
          <p key={`key_${film.name}_annotation_${index + 1}`}>
            {annotationItem}
          </p>
        ))}
        {film.director && (
          <p className="film-card__director">
            <strong>Director: {film.director}</strong>
          </p>
        )}
        {film.starring && (
          <p className="film-card__starring">
            <strong>Starring: {starringToStringRow(film.starring)}</strong>
          </p>
        )}
      </div>
    </>
  );
}

export default OverviewTab;
