import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as MovieActions from './movie-list.actions';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';

@Injectable()
export class MovieListEffects {
    @Effect()
    getMovies = this.actions$.pipe(
        ofType(MovieActions.TRY_TO_GET_MOVIES),
        map((action: MovieActions.tryToGetMovies) => {
            return action.payload;
        }),
        switchMap((page: number) => {
            return this.http.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=81b83003a946712ca88ef80e4928c1db&page=${page}`);
        }),
        switchMap((response: any) => {
            let movieArray: Movie[] = [];
            for(let x = 0; x < response.results.length; x++){
                let movieObject = response.results[x];
                let year = response.results[x].release_date.substring(0, 4);
                let genres = this.creategenresString(response.results[x].genre_ids);
                let posterImage = response.results[x].poster_path;
                let newMovie = new Movie(movieObject.id,movieObject.title,year,'',genres,'',posterImage);
                movieArray.push(newMovie);
            }

            return [{type:MovieActions.ADD_MOVIES, payload: movieArray}]
        })
    );

    creategenresString(genresIdArray) {
        let genresArray = [];
        for(let i = 0; i < genresIdArray.length; i++) {
            genresArray.push(this.genresArray.find(x => x.id === genresIdArray[i]).name);
        }
        return genresArray.join(', ');
    }

    genresArray = [
        {"id": 28,"name": "Action"},
        {"id": 12, "name": "Adventure"},
        {"id": 16,"name": "Animation"},
        {"id": 35,"name": "Comedy"},
        {"id": 80,"name": "Crime"},
        {"id": 99,"name": "Documentary"},
        {"id": 18,"name": "Drama"},
        {"id": 10751,"name": "Family"},
        {"id": 14,"name": "Fantasy"},
        {"id": 36, "name": "History"},
        {"id": 27,"name": "Horror"},
        {"id": 10402,"name": "Music"},
        {"id": 9648,"name": "Mystery"},
        {"id": 10749, "name": "Romance"},
        {"id": 878,"name": "Science Fiction"},
        {"id": 10770, "name": "TV Movie"},
        {"id": 53,"name": "Thriller"},
        {"id": 10752,"name": "War"},
        {"id": 37,"name": "Western"}
    ]

    constructor(private actions$: Actions,private http: HttpClient) {}
}