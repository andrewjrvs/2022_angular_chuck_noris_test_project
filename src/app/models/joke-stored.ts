import { Joke } from "./joke";

export interface JokeStored extends Joke {
  date: Date
}
