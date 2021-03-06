export interface JokeWrapper {
    type: string;
    value: Joke[]
}

export interface Joke {
    id: number;
    joke: string;
    categories: string[];
}
