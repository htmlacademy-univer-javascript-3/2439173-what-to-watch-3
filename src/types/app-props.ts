import { FilmType } from './../types/film.ts';
import { PlayerType } from './../types/player.ts';
import { ReviewType } from './../types/review.ts';

export type AppProps = {
    promoFilmTitle: string;
    promoFilmGenre: string;
    promoFilmYear: number;
    filmsProps: FilmType[];
    reviewProps: ReviewType[];
    playerProps: PlayerType;

  }
