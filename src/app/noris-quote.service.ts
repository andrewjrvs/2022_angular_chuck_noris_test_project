import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NorisQuote, NorisQuoteWrapper } from './models/noris-quote';

@Injectable({
  providedIn: 'root'
})
export class NorisQuoteService {

  private activeJoke = new BehaviorSubject<NorisQuote | null>(null);

  public activeQuote$ = this.activeJoke.asObservable();

  constructor(private http$: HttpClient) { }

  /**
   * triggers a  
   */
  public getNewQuote(): void {
    this.http$.get<NorisQuoteWrapper>(environment.urls.joke_source).pipe(
      map(qw => {
        // todo, not sure I need both errors here... should think of a better option
        if(qw.type !== "success") {
          
          throw "api request failed";
        } else if (qw?.value?.length < 1) {
          throw "missing quotes";
        }
        return qw.value[0];
      })
    ).subscribe({
        next: (qte) => this.activeJoke.next(qte)
        , error: (e) => this.activeJoke.error(e)
    });
  }
}
