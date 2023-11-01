import CatalogFilmCard from '../../components/catalog-film-card/catalog-film-card';
import Footer from '../../components/footer/footer';
import HeaderLogo from '../../components/logo/header_logo';

type MainPageProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmYear: number;
}

function MainPage({promoFilmTitle, promoFilmGenre, promoFilmYear}: MainPageProps): JSX.Element{
  return (
    <div>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <HeaderLogo/>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg"
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
              <img src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilmTitle}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilmGenre}</span>
                <span className="film-card__year">{promoFilmYear}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
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

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="mainPage#" className="catalog__genres-link">
                All genres
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="mainPage#" className="catalog__genres-link">
                Comedies
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="mainPage#" className="catalog__genres-link">
                Crime
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="mainPage#" className="catalog__genres-link">
                Documentary
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="mainPage#" className="catalog__genres-link">
                Dramas
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="mainPage#" className="catalog__genres-link">
                Horror
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="mainPage#" className="catalog__genres-link">
                Kids & Family
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="mainPage#" className="catalog__genres-link">
                Romance
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="mainPage#" className="catalog__genres-link">
                Sci-Fi
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="mainPage#" className="catalog__genres-link">
                Thrillers
              </a>
            </li>
          </ul>
          <div className="catalog__films-list">
            <CatalogFilmCard src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" />
            <CatalogFilmCard src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" />
            <CatalogFilmCard src="img/macbeth.jpg" alt="Macbeth" />
            <CatalogFilmCard src="img/aviator.jpg" alt="Aviator" />
            <CatalogFilmCard src="img/we-need-to-talk-about-kevin.jpg" alt="We need to talk about Kevin" />
            <CatalogFilmCard src="img/what-we-do-in-the-shadows.jpg" alt="What We Do in the Shadows" />
            <CatalogFilmCard src="img/revenant.jpg" alt="Revenant" />
            <CatalogFilmCard src="img/johnny-english.jpg" alt="Johnny English" />
            <CatalogFilmCard src="img/shutter-island.jpg" alt="Shutter Island" />
            <CatalogFilmCard src="img/pulp-fiction.jpg" alt="Pulp Fiction" />
            <CatalogFilmCard src="img/no-country-for-old-men.jpg" alt="No Country for Old Men" />
            <CatalogFilmCard src="img/snatch.jpg" alt="Snatch" />
            <CatalogFilmCard src="img/moonrise-kingdom.jpg" alt="Moonrise Kingdom" />
            <CatalogFilmCard src="img/seven-years-in-tibet.jpg" alt="Seven Years in Tibet" />
            <CatalogFilmCard src="img/midnight-special.jpg" alt="Midnight Special" />
            <CatalogFilmCard src="img/war-of-the-worlds.jpg" alt="War of the Worlds" />
            <CatalogFilmCard src="img/dardjeeling-limited.jpg" alt="Dardjeeling Limited" />
            <CatalogFilmCard src="img/orlando.jpg" alt="Orlando" />
            <CatalogFilmCard src="img/mindhunter.jpg" alt="Mindhunter" />
            <CatalogFilmCard src="img/midnight-special.jpg" alt="Midnight Special" />
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
