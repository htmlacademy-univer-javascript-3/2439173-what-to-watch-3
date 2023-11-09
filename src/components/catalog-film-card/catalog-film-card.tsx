import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useState } from 'react';
import PreviewPlayer from '../preview-player/preview-player';


export type PropsCatalogFilmCard = {
  id: number;
  name: string;
  imgSrc: string;
  videoSrc: string;
}

function CatalogFilmCard({ id, name, imgSrc, videoSrc}: PropsCatalogFilmCard): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  return(
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="small-film-card__image">
        <PreviewPlayer
          poster={imgSrc}
          videoSrc={videoSrc}
          isHovered={isHovered}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film(id)}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default CatalogFilmCard;
