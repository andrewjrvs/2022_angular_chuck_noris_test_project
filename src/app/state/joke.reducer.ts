import { createReducer, on } from '@ngrx/store';
import * as JokeActions from './joke.actions';
import { JokeStored } from '../models/joke-stored'
import { Joke } from '../models/joke';


export interface JokeState {
    favorites: ReadonlyArray<JokeStored>
    activeJoke?: Joke
    activeJokeError?: string
}

export const initialState: JokeState = { favorites: [] };

export const JokeReducer = createReducer<JokeState>(
    initialState, 
    on(JokeActions.addFavorite, (state:JokeState, { joke }): JokeState => {
        // note: where do I add the validation that it doesn't already exist
        // ... needs more research...
        return {
            ...state,
            activeJoke: undefined,
            favorites: [...state.favorites, joke],
        }
    }),
    on(JokeActions.loadJokeSuccess, (state, action): JokeState => {
        return {
            ...state,
            activeJoke: action.joke,
            activeJokeError: undefined,
        };
    }),
    on(JokeActions.loadJokeFailure, (state, action): JokeState => {
        return {
            ...state, 
            activeJoke: undefined,
            activeJokeError: action.error,
        }
    })
);

