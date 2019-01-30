import { DialogService } from './../services/dialog.service';
import { Movie } from '../models/movie.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as MovieActions from "../store/movie-list.actions";

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css']
})
export class MovieCardsComponent implements OnInit {

  state: Observable<{movies: Movie[]}>;
  constructor(private store: Store<{movieList:{movies: Movie[]}}>, private dialogService: DialogService) {
    this.state = store.select('movieList');
  }

  ngOnInit() {
  }

  editMovie(index: number,movie){
    this.dialogService.createNewMovie(movie).subscribe((form:any) => {
      if(form) {
        let newMovie: Movie = new Movie(undefined,form.title,form.year,form.runtime,form.genre,form.director,movie.posterImage);
        this.store.dispatch(new MovieActions.UpdateMovie({index,movie: newMovie}));
      }
    })
  }

  removeMovie(index, title) {
    this.dialogService.areYouSure(`You sure you want to delete "${title}" from your list?`).subscribe((answer) => {
      if(answer){
        this.store.dispatch(new MovieActions.RemoveMovie(index));
      }
    });
  }

}
