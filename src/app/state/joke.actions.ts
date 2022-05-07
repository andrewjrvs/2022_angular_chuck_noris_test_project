import { createAction, props } from '@ngrx/store';
import { Joke } from '../models/joke';
import { JokeStored } from '../models/joke-stored';

export const addFavorite = createAction(
    '[Joke Favorite List] Add Favorite',
    props<{ joke: JokeStored }>()
);

export const removeFavorite = createAction(
    '[Joke Favorite List] Remove Favorite',
    props<{ joke: JokeStored }>()
)

export const getFavoriteList = createAction(
    '[Joke Favorite List] Retrieve Favorites Success',
    props<{ favorites: ReadonlyArray<JokeStored> }>()
)

export const loadJoke = createAction(
    '[Joke] Load'
);

export const loadJokeSuccess = createAction(
    '[Joke] Load Success',
    props<{ joke: Joke }>()
);

export const loadJokeFailure = createAction(
    '[Joke] Load Fail',
    props<{ error: string }>()
);
