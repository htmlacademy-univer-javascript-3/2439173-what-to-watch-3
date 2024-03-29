import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import Tabs from '../../components/tabs/tabs';
import { FilmType } from '../../types/film';
import MoreLikeThis from '../../components/more-like-this/more-like-this';
import NotFoundPage from '../not-found-page/not-found-page';

const MAX_RECOMEND_FILM_VALUE = 4;

type PropsFilmPage = {
  films: FilmType[];
};

function getFilmById(filmId: number): FilmType | undefined {
  return Array<FilmType>().find<FilmType>(
    (film): film is FilmType => filmId === Number(film.id),
  );
}

function Film({ films }: PropsFilmPage): JSX.Element {
  const currentFilmId = useParams().id;
  const currentFilm = getFilmById(Number(currentFilmId));
  if (currentFilm === undefined) {
    return <NotFoundPage />;
  }
  return (
    <div>
      <Helmet>
        <title>About film</title>
      </Helmet>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo className={'logo__link'} />
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img
                    src="img/avatar.jpg"
                    alt="User avatar"
                    width="63"
                    height="63"
                  />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to="add-review.html" className="btn film-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={currentFilm.posterImage}
                alt={currentFilm.name}
                width="218"
                height="327"
              />
            </div>
            <Tabs film={currentFilm} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <MoreLikeThis
          films={films
            .filter(
              (film) =>
                film !== currentFilm && film.genre === currentFilm.genre,
            )
            .slice(0, MAX_RECOMEND_FILM_VALUE)}
        />
        <Footer />
      </div>
    </div>
  );
}

export default Film;
