export interface NorisJokeWrapper {
    type: string;
    value: NorisJoke[]
}

export interface NorisJoke {
    id: number;
    joke: string;
    categories: string[];
}
