import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Joke, JokeWrapper } from './models/joke';


var x = 1;

@Injectable({
  providedIn: 'root'
})
export class JokeGeneratorService {

  constructor(private http$: HttpClient) { }

  public getJoke(): Observable<Joke> {
    return this.http$.get<JokeWrapper>(environment.urls.joke_source).pipe(
      //delay(5000),  // testing Detayed response...
      map(qw => {
        if (qw.type !== "success") {
          throw "api request failed";
        } else if (qw?.value?.length < 1) {
          throw "missing jokes";
        }
        // if (qw.value[0].id % 8 === 0) {
        //   throw "Number was evenly divisible by 8";
        // }

        // if (qw.value[0].id % 2 === 0) {
        //   throw "Number was evenly divisible by 2";
        // }
        return qw.value[0];
      })
      , catchError((err) => {
        console.error(err);
        return throwError(() => new Error(err));
      })
    )
  }



}
