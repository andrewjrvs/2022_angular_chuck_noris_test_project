import { createFeatureSelector, createSelector } from "@ngrx/store";
import { JokeState } from "./joke.reducer";

const getJokesFeatureState = createFeatureSelector<JokeState>('joke');

export const getFavoriteJokeList = createSelector(
    getJokesFeatureState,
    state => state.favorites
);

export const getActiveJoke = createSelector(
    getJokesFeatureState,
    state => state.activeJoke
)
export const getActiveJokeLoadError = createSelector(
    getJokesFeatureState,
    state => state.activeJokeError
)