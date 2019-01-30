import * as MovieActions from "./movie-list.actions";
import { Movie } from '../movie.model';

const initialState = {
    movies: []
}


export function movieListReducer(state = initialState, action: MovieActions.MovieActions) {

    switch(action.type) {
        case MovieActions.ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies, action.payload]
        }
        case MovieActions.ADD_MOVIES:
            return {
                ...state,
                movies: [...state.movies, ...action.payload]
            }
        default:
            return state;
    }
}