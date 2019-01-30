import { AreYouSureComponent } from './../dialogs/are-you-sure/are-you-sure.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateMovieComponent } from '../dialogs/create-movie/create-movie.component';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  
  createNewMovie(movie: Movie = undefined) {
    let dialogRef = this.dialog.open(CreateMovieComponent, {
      data: movie,
      autoFocus: false
    });
    return dialogRef.afterClosed();
  }

  areYouSure(question: string) {
    let dialogRef = this.dialog.open(AreYouSureComponent, {
      data: question,
      autoFocus: false
    });
    return dialogRef.afterClosed();
  }
}
