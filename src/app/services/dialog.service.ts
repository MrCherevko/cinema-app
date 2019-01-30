import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateMovieComponent } from '../dialogs/create-movie/create-movie.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  
  createNewMovie() {
    let dialogRef = this.dialog.open(CreateMovieComponent, {
      autoFocus: false,
      panelClass: 'createNewMovie'
    });
    return dialogRef.afterClosed();
  }
}
