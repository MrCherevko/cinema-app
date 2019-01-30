import { Store } from '@ngrx/store';
import { Movie } from './../movie-list/movie.model';
import { DialogService } from './../services/dialog.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as MovieActions from "../movie-list/store/movie-list.actions";
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private dialogService:DialogService,private breakpointObserver: BreakpointObserver,private store: Store<{movieList:{movies: Movie[]}}>) {}

  addMovie(){
    this.dialogService.createNewMovie().subscribe((form:any) => {
      if(form) {
        let newMovie = new Movie(undefined,form.title,form.year,form.runtime,form.genre,form.director);
        this.store.dispatch(new MovieActions.AddMovie(newMovie));
      }
    })
  }

}
