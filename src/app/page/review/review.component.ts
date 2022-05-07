import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Observable, tap } from 'rxjs';
import { Joke } from '../../models/joke';
import { getActiveJoke, State, addFavorite, loadJoke, getActiveJokeLoadError  } from '../../state';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  public activeJoke$!: Observable<Joke | undefined>

  public errorMsg$!: Observable<string | undefined>

  public pending: string = '';

  ngOnInit(): void {
    this.pending = 'FIRST_JOKE'
    this.activeJoke$ = this.store.select(getActiveJoke).pipe(
      // only trigger
      tap(val => !val && this.pending === 'FIRST_JOKE' && (this.triggerNewJokeQuery())),
      filter(val => !!val),
      tap(val => this.pending = '')
    )
    this.errorMsg$ = this.store.select(getActiveJokeLoadError).pipe(
      tap(err => !!err && (this.pending = 'LOOKUP_ERROR'))
    )
  }
 
  constructor(private store: Store<State>) { }

  public process_action(jke: Joke, action: string) {
    this.pending = action;
    if (action === 'KEEP') {
      this.store.dispatch(addFavorite({joke: {...jke, date: new Date()}}))
    }

    // I'm tempted to log the rejected one here... so if the number comes up again we 'could' auto reject it..
    // but for now lets just pretend we will NEVER see that number again...
    this.triggerNewJokeQuery();
  }

  public triggerNewJokeQuery(): void {
    this.store.dispatch(loadJoke());
  }

}
