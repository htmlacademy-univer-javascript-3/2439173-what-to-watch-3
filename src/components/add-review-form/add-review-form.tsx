import Rating from '../rating/rating';
import { useCallback, useState } from 'react';

export type PropsAddReviewForm = {
    rating: number;
    comment: string;
};

function AddReviewForm(): JSX.Element {
  const [reviewForm, setReviewForm] = useState<PropsAddReviewForm>({
    rating: 0,
    comment: '',
  });

  const handleChange = useCallback(
    (nextValue: Partial<PropsAddReviewForm>) => {
      setReviewForm((prevValue) => prevValue && { ...prevValue, ...nextValue });
    },
    [setReviewForm],
  );

  return(
    <div className="add-review">
      <form action="#" className="add-review__form">
        <Rating
          onClick={(value: number) => {
            handleChange({
              rating: value,
            });
          }}
        />
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={reviewForm.comment}
            onChange={(e) => {
              handleChange({
                comment: e.target.value,
              });
            }}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">
                    Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
