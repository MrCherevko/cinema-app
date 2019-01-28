import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Store } from '@ngrx/store';
import { Movie } from './movie.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: Observable<{movies: Movie[]}>;

   constructor(store: Store<{movieList:{movies: Movie[]}}>) {
     this.dataSource = store.select('movieList');
   }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id','title', 'year', 'runtime', 'gener', 'director'];

  ngOnInit() {}
}
