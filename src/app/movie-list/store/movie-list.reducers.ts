import * as MovieActions from "./movie-list.actions";
import { Movie } from '../movie.model';

const initialState = {
    movies: [new Movie("Hulk", 1990,"125 min","Drama", "Spilberg"),new Movie("Pulk", 1991,"125 min","Drama", "Spilberg")]
}


export function movieListReducer(state = initialState, action: MovieActions.MovieActions) {

    switch(action.type) {
        case MovieActions.GET_MOVIES:
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }
        default:
            return state;
    }
}