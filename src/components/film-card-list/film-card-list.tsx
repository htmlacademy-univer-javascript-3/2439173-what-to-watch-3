import { PropsCatalogFilmCard } from '../catalog-film-card/catalog-film-card';
import CatalogFilmCard from '../catalog-film-card/catalog-film-card';


type FilmCardListProps = {
    films: PropsCatalogFilmCard[];
  };

function FilmCardList({ films }: FilmCardListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <CatalogFilmCard
          key={film.id}
          {...film}
        />
      ))}
    </div>
  );
}

export default FilmCardList;
