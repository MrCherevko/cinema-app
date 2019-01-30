import {Action} from '@ngrx/store'
import { Movie } from '../models/movie.model';
export const TRY_TO_GET_MOVIES = 'TRY_TO_GET_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const ADD_MOVIES = 'ADD_MOVIES';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';

export class tryToGetMovies implements Action {
    readonly type = TRY_TO_GET_MOVIES;

    constructor(public payload: number){}
}
export class AddMovie implements Action {
    readonly type = ADD_MOVIE;
    constructor(public payload: Movie){}
}

export class AddMovies implements Action {
    readonly type = ADD_MOVIES;
    constructor(public payload: Movie[]){}
}
export class UpdateMovie implements Action {
    readonly type = UPDATE_MOVIE;
    constructor(public payload: {index: number, movie: Movie}){}
}
export class RemoveMovie implements Action {
    readonly type = REMOVE_MOVIE;
    constructor(public payload: number){}
}

export type MovieActions = AddMovie | AddMovies | UpdateMovie | RemoveMovie | tryToGetMovies;