import { Component, OnInit } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { NorisJoke } from 'src/app/models/noris-joke';
import { NorisJokeFavsService } from 'src/app/noris-joke-favs.service';
import { NorisJokeService } from 'src/app/noris-joke.service';

var cnt = 1;

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  public activeJoke$: Observable<NorisJoke | null>

  public errorMsg$ = new Subject<string | null> ()

  public pending: string = '';

  ngOnInit(): void {
    this.pending = 'FIRST_JOKE'
    this.triggerNewJokeQuery();
    
  }
 
  constructor(private nqSrv: NorisJokeService, private favsSrv: NorisJokeFavsService) {
    this.activeJoke$ = this.nqSrv.activeJoke$.pipe(
        tap(val => {
          // resets the process
          this.errorMsg$.next('');
          this.pending = '';
        }),
    );
  }

  public process_action(jke: NorisJoke, action: string) {
    this.pending = action;
    if (action === 'KEEP') {
        this.favsSrv.add(jke);
    }

    // I'm tempted to log the rejected one here... so if the number comes up again we 'could' auto reject it..
    // but for now lets just pretend we will NEVER see that number again...
    this.triggerNewJokeQuery();
  }

  public triggerNewJokeQuery(): void {
    this.nqSrv.getNewJoke().catch(err => {
      // process a lookup error;
      this.pending = 'LOOKUP_ERROR';
      this.errorMsg$.next(err)
    });
  }

}
