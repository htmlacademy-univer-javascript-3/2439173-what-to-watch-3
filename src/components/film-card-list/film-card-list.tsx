import { useState } from 'react';
import { PropsCatalogFilmCard } from '../catalog-film-card/catalog-film-card';
import CatalogFilmCard from '../catalog-film-card/catalog-film-card';


type FilmCardListProps = {
    films: PropsCatalogFilmCard[];
  };

function FilmCardList({ films }: FilmCardListProps): JSX.Element {
  const [, setActiveCardId] = useState<number | null>();
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <CatalogFilmCard
          key={film.id}
          {...film}
          onMouseEnter={() => {
            setActiveCardId(film.id);
          }}
          onMouseLeave={() => {
            setActiveCardId(null);
          }}
        />
      ))}
    </div>
  );
}

export default FilmCardList;
