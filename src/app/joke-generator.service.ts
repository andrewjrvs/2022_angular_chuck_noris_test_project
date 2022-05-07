import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Joke, JokeWrapper } from './models/joke';


var x = 1;

@Injectable({
  providedIn: 'root'
})
export class JokeGeneratorService {

  private activeJoke = new Subject<Joke>();

  public activeJoke$ = this.activeJoke.asObservable();

  constructor(private http$: HttpClient) { }

  /**
   * triggers a new joke lookup
   */
  public async getNewJoke(): Promise<boolean> {
    return new Promise((res, reject) => {
      this.http$.get<JokeWrapper>(environment.urls.joke_source).pipe(
        //delay(5000),  // testing Detayed response...
        map(qw => {
          if (qw.type !== "success") {
            throw "api request failed";
          } else if (qw?.value?.length < 1) {
            throw "missing Jokes";
          }
          if (qw.value[0].id % 8 === 0) {
            throw "Number was evenly divisible by 8";
          }
          return qw.value[0];
        })
      ).subscribe({
        next: (qte) => {
          this.activeJoke.next(qte);
          res(true);
        }
        , error: (e) => reject(e)
        ,
      });
    });
  }
}
