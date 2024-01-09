import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mockSelectedFilm } from './mocks/films.ts';
import { Provider } from 'react-redux';
import { store } from './store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { setFilms, setFilmLoadingStatus } from './store/action';
import { FilmType } from './types/film';

type AppDispatch = typeof store.dispatch;
store.dispatch(
  createAsyncThunk<
    void,
    undefined,
    {
      dispatch: AppDispatch;
      state: ReturnType<typeof store.getState>;
      extra: AxiosInstance;
    }
  >('fetchFilms', async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<FilmType[]>('/films');
    dispatch(setFilmLoadingStatus(true));
    dispatch(setFilms(data));
    dispatch(setFilmLoadingStatus(false));
  })(),
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App selectedFilm={mockSelectedFilm} />
    </Provider>
  </React.StrictMode>,
);
