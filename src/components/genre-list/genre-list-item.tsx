import { useAppDispatch } from '../hooks';
import { setGenre } from '../../store/action';

type GenreListItemProps = {
  genre: string;
  isActive?: boolean;
};

function GenreListItem({ genre, isActive }: GenreListItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <li
      key={`key_${genre}`}
      className={`catalog__genres-item ${
        isActive ? 'catalog__genres-item--active' : ''
      }`}
    >
      <a
        href="src/pages/main-page/main-page#"
        className="catalog__genres-link"
        onClick={(event) => {
          event.preventDefault();
          dispatch(setGenre(genre));
        }}
      >
        {genre}
      </a>
    </li>
  );
}

export default GenreListItem;
