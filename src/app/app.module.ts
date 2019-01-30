import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatInputModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { movieListReducer } from './movie-list/store/movie-list.reducers';
import { CreateMovieComponent } from './dialogs/create-movie/create-movie.component';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { MovieListEffects } from './movie-list/store/movie-list.effects';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    NavigationComponent,
    CreateMovieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    StoreModule.forRoot({movieList: movieListReducer}),
    EffectsModule.forRoot([MovieListEffects]),
    MatDialogModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [CreateMovieComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
