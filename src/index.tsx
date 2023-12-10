import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { PromoFilm } from './const';
import { FILMS } from './mocks/films.ts';
import { REVIEW } from './mocks/reviews.ts';
import { PLAYER } from './mocks/player.ts';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promoFilmTitle={PromoFilm.PromoFilmTitle}
        promoFilmGenre={PromoFilm.PromoFilmGenre}
        promoFilmYear={PromoFilm.PromoFilmYear}
        filmsProps={FILMS}
        reviewProps={REVIEW}
        playerProps={PLAYER}
      />
    </Provider>
  </React.StrictMode>
);
