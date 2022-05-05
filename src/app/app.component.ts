import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NorisQuote } from './models/noris-quote';
import { NorisQuoteFavsService } from './noris-quote-favs.service';
import { NorisQuoteService } from './noris-quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '2022_angular_chuck_noris_test_project';


  public activeQuote$: Observable<NorisQuote | null>
  public favoriteList$: Observable<NorisQuote[]>

  constructor(private nqSrv: NorisQuoteService, private favsSrv: NorisQuoteFavsService) {
    this.activeQuote$ = this.nqSrv.activeQuote$
    this.favoriteList$ = this.favsSrv.list$
  }

  public newQte_OnClick(): void {
    this.nqSrv.getNewQuote();
  }

  public saveQte_Onclick(qte: NorisQuote): void {
    this.favsSrv.add(qte);
  }
}
