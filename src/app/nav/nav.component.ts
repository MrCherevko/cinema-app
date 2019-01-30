import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DialogService } from '../services/dialog.service';
import { Store } from '@ngrx/store';
import { Movie } from '../models/movie.model';

import * as MovieActions from "../store/movie-list.actions";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  page: number = 1;
  constructor(private dialogService:DialogService,private breakpointObserver: BreakpointObserver,private store: Store<{movieList:{movies: Movie[]}}>) {}

  addMovie(){
    this.dialogService.createNewMovie().subscribe((form:any) => {
      if(form) {
        let newMovie = new Movie(undefined,form.title,form.year,form.runtime,form.genre,form.director);
        this.store.dispatch(new MovieActions.AddMovie(newMovie));
      }
    })
  }

  fetchNextPage(){
    this.store.dispatch(new MovieActions.tryToGetMovies(++this.page));
  }

}
