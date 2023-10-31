import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const PromoFilm = {
  PromoFilmTitle: 'The Grand Budapest Hotel',
  PromoFilmGenre: 'Drama',
  PromoFilmYear: 2014
} as const;

root.render(
  <React.StrictMode>
    <App promoFilmTitle={PromoFilm.PromoFilmTitle} promoFilmGenre={PromoFilm.PromoFilmGenre} promoFilmYear={PromoFilm.PromoFilmYear}/>
  </React.StrictMode>
);
