import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { JokeGeneratorService } from "../joke-generator.service";
import * as JokeActions from './joke.actions';

@Injectable()
export class JokeEffects {

    loadActiveJoke$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(JokeActions.loadJoke),
            mergeMap(() => this.jokeGnSrv.getJoke().pipe(
                map(joke => JokeActions.loadJokeSuccess({ joke }))
                , catchError(error => of(JokeActions.loadJokeFailure({error})))
            ))
        );
    })

    constructor(private actions$:Actions,
                private jokeGnSrv: JokeGeneratorService) {}
}