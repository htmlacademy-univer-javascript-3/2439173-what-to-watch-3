import { createAction } from '@reduxjs/toolkit';
import {FilmType} from '../types/film';

export const setGenre = createAction<string>('films/setGenre');

export const setFilms = createAction<FilmType[]>('films/setFilms');
