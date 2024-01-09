import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import FilmCardList from '../../components/film-card-list/film-card-list';
import { FilmType } from '../../types/film';

export type MyListPageProps = {
  films: FilmType[];
};

function MyList({ films }: MyListPageProps): JSX.Element {
  return (
    <div>
      <Helmet>
        <title>My film list</title>
      </Helmet>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo className={'logo__link'} />
          <h1 className="page-title user-page__title">
            My list <span className="user-page__film-count">9</span>
          </h1>
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

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <FilmCardList films={films} />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default MyList;
