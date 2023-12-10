import { createReducer } from '@reduxjs/toolkit';
import {FILMS} from '../mocks/films';
import {FilmType} from '../types/film';
import {setGenre, setFilms} from './action';

type state = {
  currentGenre: string;
  allFilms: FilmType[];
};

const initialState: state = {
  currentGenre: 'All genres',
  allFilms: FILMS,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, value) => {
      state.currentGenre = value.payload;
    })
    .addCase(setFilms, (state, value) => {
      state.allFilms = value.payload;
    });
});

export { reducer };
