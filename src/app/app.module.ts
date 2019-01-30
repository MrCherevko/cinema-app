import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { StoreModule } from '@ngrx/store';
import { movieListReducer } from './store/movie-list.reducers';
import { CreateMovieComponent } from './dialogs/create-movie/create-movie.component';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { MovieListEffects } from './store/movie-list.effects';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MovieCardsComponent } from './movie-cards/movie-cards.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavComponent } from './nav/nav.component';
import { 
  MatToolbarModule,
  MatCardModule, 
  MatInputModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatTableModule, 
  MatPaginatorModule, 
  MatSortModule, 
  MatDialogModule, 
  MatOptionModule, 
  MatSelectModule } from '@angular/material';
import { AreYouSureComponent } from './dialogs/are-you-sure/are-you-sure.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateMovieComponent,
    MovieCardsComponent,
    NavComponent,
    AreYouSureComponent
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
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule
  ],
  entryComponents: [CreateMovieComponent,AreYouSureComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
