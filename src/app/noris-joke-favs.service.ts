import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { NorisJoke } from './models/noris-joke';

@Injectable({
  providedIn: 'root'
})
export class NorisJokeFavsService {

  private favsList = new BehaviorSubject<[NorisJoke, Date][]>([])

  public list$ = this.favsList.asObservable()
  public count$ = this.favsList.pipe(
    map(lst => lst.length)
  )

  constructor() { }

  public add(jk: NorisJoke): boolean {
    const arrFavs = this.favsList.getValue()
    if (arrFavs.findIndex(x => x[0].id === jk.id) < 0) {
      this.favsList.next([...arrFavs, [jk, new Date]]);
      return true;
    }
    return false;
  }

}
