import { FilmType } from '../../types/film';

type PropsDetailsTab = {
    film: FilmType;
};

const starringToStringColumn = function (starring: string[]) {
  return starring.map((value) => `${value}, \n`);
};

function DetailsTab({film}: PropsDetailsTab): JSX.Element {
  return(
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        {film.director && (
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{film.director}</span>
          </p>
        )}
        {film.starring && (
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              {starringToStringColumn(film.starring)}
            </span>
          </p>
        )}
      </div>
      <div className="film-card__text-col">
        {film.runTime && (
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">
              {film.runTime}
            </span>
          </p>
        )}
        {film.genre && (
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{film.genre}</span>
          </p>
        )}
        {film.releaseDate && (
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{film.releaseDate}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default DetailsTab;
