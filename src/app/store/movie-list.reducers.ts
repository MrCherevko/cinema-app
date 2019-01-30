import * as MovieActions from "./movie-list.actions";

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
        case MovieActions.UPDATE_MOVIE:
            let movie = state.movies[action.payload.index];
            const updatedMovie = {
                ...movie,
                ...action.payload.movie
            };
            let movies = [...state.movies];
            movies[action.payload.index] = updatedMovie;
            return {
                ...state,
                movies: movies
        }
        case MovieActions.REMOVE_MOVIE:
            let oldMovies = [...state.movies];
            oldMovies.splice(action.payload, 1);
            return {
                ...state,
                movies: oldMovies
        }
        default:
            return state;
    }
}