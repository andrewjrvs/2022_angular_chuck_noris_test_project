import { createAction, props } from '@ngrx/store';
import { JokeStored } from '../models/joke-stored';

export const addFavorite = createAction(
    '[Favorite List] Add Favorite',
    props<{joke : JokeStored}>()
);

export const removeFavorite = createAction(
    '[Favorite List] Remove Favorite',
    props<{ joke : JokeStored}>()
)

export const getFavoriteList = createAction(
    '[Favorite List] Retrieve Favorites Success',
    props<{ favorites: ReadonlyArray<JokeStored>}>()
)
