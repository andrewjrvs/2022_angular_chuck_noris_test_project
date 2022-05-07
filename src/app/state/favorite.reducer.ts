import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { addFavorite, getFavoriteList } from './favorite.actions';
import { JokeStored } from '../models/joke-stored'


export interface FavoritesState {
    jokes: ReadonlyArray<JokeStored>
}

export const initialState: FavoritesState = { jokes: [] };

export const FavoritesReducer = createReducer<FavoritesState>(
    initialState, 
    on(addFavorite, (state:FavoritesState, { joke }) => {
        return {
            ...state,
            jokes: [...state.jokes, joke]
        }
    }), 
    on(getFavoriteList, (state: FavoritesState, { favorites }) => {
        return {
            ...state, 
            favorites
        }
    })
);

