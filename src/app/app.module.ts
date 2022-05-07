import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeGeneratorService } from './joke-generator.service';
import { JokeComponent } from './joke/joke.component';
import { ReviewComponent } from './page/review/review.component';
import { SavedComponent } from './page/saved/saved.component';
import { StoreModule } from '@ngrx/store';
import { JokeReducer } from './state/joke.reducer';
import { EffectsModule } from '@ngrx/effects';
import { JokeEffects } from './state';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    ReviewComponent,
    SavedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({ joke: JokeReducer }),
    EffectsModule.forRoot([ JokeEffects ]),
  ],
  providers: [JokeGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
