import {createReducer} from '@reduxjs/toolkit';
import {FilmType} from '../types/film';
import {setFilmLoadingStatus, setFilms, setGenre} from './action';

type state = {
  currentGenre: string;
  films: FilmType[];
  isFilmLoading: boolean;
};

const f : FilmType[] = [];
const initialState: state = {
  currentGenre: 'All genre-list',
  films: f,
  isFilmLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, value) => {
      state.currentGenre = value.payload;
    })
    .addCase(setFilms, (state, value) => {
      state.films = value.payload;
    })
    .addCase(setFilmLoadingStatus, (state, value) => {
      state.isFilmLoading = value.payload;
    });
});

export { reducer };
