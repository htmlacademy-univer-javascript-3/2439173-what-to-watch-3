import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import { AppRoute } from '../../const';

export type PropsAddReview = {
  id: number;
  name: string;
  imgSrc: string;
  bgImgSrc: string;
};

function AddReview({id, name, imgSrc, bgImgSrc}: PropsAddReview): JSX.Element {
  return (
    <div>
      <Helmet><title>Add Review</title></Helmet>
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={bgImgSrc} alt={name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header">
            <Logo className={'logo__link'}/>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={AppRoute.Film(id)} className="breadcrumbs__link">
                    {name}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>
          <div className="film-card__poster film-card__poster--small">
            <img
              src={imgSrc}
              alt={name}
              width="218"
              height="327"
            />
          </div>
        </div>
        <AddReviewForm/>
      </section>
    </div>
  );
}

export default AddReview;
