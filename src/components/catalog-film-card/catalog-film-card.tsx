import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useState } from 'react';
import PreviewPlayer from '../preview-player/preview-player';
import { FilmType } from '../../types/film';

export type PropsCatalogFilmCard = {
  film: FilmType;
};

function CatalogFilmCard({ film }: PropsCatalogFilmCard): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="small-film-card__image">
        <PreviewPlayer
          poster={film.posterImage}
          videoSrc={film.previewVideoLink}
          isHovered={isHovered}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film(film.id)}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default CatalogFilmCard;
