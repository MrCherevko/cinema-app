import {Action} from '@ngrx/store'
import { Movie } from '../movie.model';

export const GET_MOVIES = 'GET_MOVIES';

export class GetMovies implements Action {
    readonly type = GET_MOVIES;
    payload: Movie[]
}

export type MovieActions = GetMovies;