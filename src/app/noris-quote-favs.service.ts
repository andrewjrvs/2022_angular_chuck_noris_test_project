import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NorisQuote } from './models/noris-quote';

@Injectable({
  providedIn: 'root'
})
export class NorisQuoteFavsService {

  private favsList = new BehaviorSubject<NorisQuote[]>([])

  public list$ = this.favsList.asObservable()

  constructor() { }

  public add(qte: NorisQuote): boolean {
    const arrFavs = this.favsList.getValue()
    if (arrFavs.findIndex(x => x.id === qte.id) < 0) {
      this.favsList.next([...arrFavs, qte]);
      return true;
    }
    return false;
  }

}
