import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import FilmCardList from '../../components/film-card-list/film-card-list';
import GenreList from '../../components/genre-list/genre-list';
import { useAppSelector } from '../../components/hooks';
import {
  filterFilmsGenre,
  extractAllGenres,
} from '../../help-functions/filter-films-genre';
import { useState, useCallback } from 'react';
import ShowMoreButton from '../../components/show-more/show-more';
import { FilmType } from '../../types/film';

type MainPageProps = {
  selectedFilm: FilmType;
};

const FILMS_ON_PAGE_COUNT = 8;

function MainPage({ selectedFilm }: MainPageProps): JSX.Element {
  const allFilms = useAppSelector((state) => state.films);
  const currentGenre = useAppSelector((state) => state.currentGenre);
  const films = filterFilmsGenre(allFilms, currentGenre);
  const genres = extractAllGenres(allFilms);
  const [countFilms, setCountFilms] = useState(FILMS_ON_PAGE_COUNT);
  const showMoreHandle = useCallback(() => {
    setCountFilms((prev) => prev + FILMS_ON_PAGE_COUNT);
  }, [setCountFilms]);
  return (
    <div>
      <Helmet>
        <title>Main</title>
      </Helmet>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
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
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{selectedFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{selectedFilm.genre}</span>
                <span className="film-card__year">{selectedFilm.released}</span>
              </p>
              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList genres={genres} activeGenre={currentGenre} />
          <FilmCardList films={films.slice(0, countFilms)} />
          {countFilms < films.length && (
            <ShowMoreButton onClick={showMoreHandle} />
          )}
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
