import CatalogFilmCard from '../catalog-film-card/catalog-film-card';
import { FilmType } from '../../types/film';


type FilmCardListProps = {
    films: FilmType[];
  };

function FilmCardList({ films }: FilmCardListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <CatalogFilmCard
          key={film.id}
          film={film}
        />
      ))}
    </div>
  );
}

export default FilmCardList;
