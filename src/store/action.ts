import { createAction } from '@reduxjs/toolkit';
import {FilmType} from '../types/film';

export const Action = {
  SET_FILMS: 'getFilms',
  SET_GENRE: 'setGenre',
  SET_LOADING: 'setLoading'
};

export const setGenre = createAction<string>(Action.SET_GENRE);

export const setFilms = createAction<FilmType[]>(Action.SET_FILMS);

export const setFilmLoadingStatus = createAction<boolean>(Action.SET_LOADING);
