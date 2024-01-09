import CatalogFilmCard from '../catalog-film-card/catalog-film-card';
import { FilmType } from '../../types/film';

type PropsMoreLikeThis = {
  films: FilmType[];
};

function MoreLikeThis({ films }: PropsMoreLikeThis): JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {films.map((film) => (
          <CatalogFilmCard key={film.id} film={film} />
        ))}
      </div>
    </section>
  );
}

export default MoreLikeThis;
