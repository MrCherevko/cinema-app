import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent {

  constructor(public dialogRef: MatDialogRef<any>) {}

  createMovie(form) {
    this.dialogRef.close(form.value);
  }

}
