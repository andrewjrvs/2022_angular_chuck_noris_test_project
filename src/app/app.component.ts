import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Store } from '@ngrx/store';
import { getFavoriteJokeList, State } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '2022_angular_chuck_noris_test_project';

  public jokeCount$ = this.store.select(getFavoriteJokeList).pipe(map(l => l.length));

  constructor(private store: Store<State>) {}
  
}
