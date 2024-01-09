type RatingProps = {
  num: number;
  onClick: () => void;
};
function Star({ num, onClick }: RatingProps): JSX.Element {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${num}`}
        type="radio"
        name="rating"
        defaultValue={num}
        defaultChecked={num === 8}
        onClick={onClick}
      />
      <label className="rating__label" htmlFor={`star-${num}`}>
        Rating {num}
      </label>
    </>
  );
}

export default Star;
