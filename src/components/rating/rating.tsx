import Star from './star.tsx';

const MAX_RATING = 10;

type RatingProps = {
  onClick: (value: number) => void;
};
function Rating({ onClick }: RatingProps): JSX.Element {
  return(
    <div className="rating">
      <div className="rating__stars">
        {Array.from(Array(MAX_RATING).keys()).map((i) => (
          <Star
            key={MAX_RATING - i}
            num={MAX_RATING - i}
            onClick={() => onClick(MAX_RATING - i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Rating;
