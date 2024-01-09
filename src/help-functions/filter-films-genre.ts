import { FilmType } from '../types/film';

const ALL_GENRES = 'All genre-list';

export const filterFilmsGenre = (
  films: FilmType[],
  genre: string,
): FilmType[] => {
  if (genre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};

export const extractAllGenres = (films: FilmType[]): Array<string> => {
  const genres = films.map((film) => film.genre);
  return [ALL_GENRES, ...new Set(genres)];
};
