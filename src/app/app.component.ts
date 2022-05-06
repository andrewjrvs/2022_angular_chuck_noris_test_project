import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NorisJoke } from './models/noris-joke';
import { NorisJokeFavsService } from './noris-joke-favs.service';
import { NorisJokeService } from './noris-joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '2022_angular_chuck_noris_test_project';

  public jokeCount$ = this.njfSrv.count$;

  constructor(private njfSrv: NorisJokeFavsService) {}
  
}
