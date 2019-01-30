import * as MovieActions from './store/movie-list.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cinema-app';
  constructor(public store: Store<{movieList:{movies: Movie[]}}>) {}

  ngOnInit(){
    this.store.dispatch(new MovieActions.tryToGetMovies(1));
  }
}
