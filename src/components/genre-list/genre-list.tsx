import GenreListItem from './genre-list-item';

type GenresListProps = {
  genres: string[];
  activeGenre: string;
};

function GenreList({ genres, activeGenre }: GenresListProps): JSX.Element {
  return(
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <GenreListItem key={genre} genre={genre} isActive={genre === activeGenre} />
      ))}
    </ul>
  );
}

export default GenreList;
