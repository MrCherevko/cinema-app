import { DialogService } from './../services/dialog.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

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
                let genres = this.createGenresString(response.results[x].genre_ids);
                let posterImage = response.results[x].poster_path;
                let newMovie = new Movie(movieObject.id,movieObject.title,year,'',genres,'',posterImage);
                movieArray.push(newMovie);
            }

            return [{type:MovieActions.ADD_MOVIES, payload: movieArray}]
        })
    );

    @Effect()
    tryGetDetails = this.actions$.pipe(
        ofType(MovieActions.TRY_TO_GET_MOVIE_DETAILS),
        map((action: MovieActions.tryToGetMovieDetails) => {
            this.index = action.payload.index;
            return action.payload.id;
        }),
        switchMap((id: number) => {
            return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=81b83003a946712ca88ef80e4928c1db`);
        }),
        switchMap((response: any) => {
            let year = response.release_date.substring(0, 4);
            let genres = this.dispatchNamesFromArray(response.genres);
            let director = this.dispatchNamesFromArray(response.production_companies);
            let posterImage = response.poster_path;
            let updatedMovie = new Movie(response.id,response.title,year,response.runtime,genres,director,posterImage);
            this.openDialog(this.index, updatedMovie);
            return [{type:MovieActions.UPDATE_MOVIE, payload: {index: this.index, movie: updatedMovie}}]
        })
    );

    createGenresString(genresIdArray) {
        let genresArray = [];
        for(let i = 0; i < genresIdArray.length; i++) {
            genresArray.push(this.genresArray.find(x => x.id === genresIdArray[i]).name);
        }
        return genresArray.join(', ');
    }

    dispatchNamesFromArray(array) {
        let stringArray = [];
        for(let i = 0; i < array.length; i++) {
            stringArray.push(array[i].name);
        }
        return stringArray.join(', ');
    }

    index: number;

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
    ];

    openDialog(index: number, movie: Movie){
        this.dialogService.createNewMovie(movie).subscribe(() => {
            (form:any) => {
                if(form) {
                    let newMovie: Movie = new Movie(undefined,form.title,form.year,form.runtime,form.genre,form.director,movie.posterImage);
                    this.store.dispatch(new MovieActions.UpdateMovie({index,movie: newMovie}));
                }
            }
        });
    }

    constructor(private actions$: Actions,private http: HttpClient, private dialogService: DialogService, private store: Store<{movieList:{movies: Movie[]}}>) {}
}