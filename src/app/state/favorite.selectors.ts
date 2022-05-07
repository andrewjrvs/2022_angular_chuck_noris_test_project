import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FavoritesState } from "./favorite.reducer";

const getFavoritesFeatureState = createFeatureSelector<FavoritesState>('favorites');

export const getFavoriteJokeList = createSelector(
    getFavoritesFeatureState,
    state => state.jokes
);

