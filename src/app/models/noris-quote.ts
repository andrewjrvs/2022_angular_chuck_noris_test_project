export interface NorisQuoteWrapper {
    type: string;
    value: NorisQuote[]
}

export interface NorisQuote {
    id: number;
    joke: string;
    categories: string[];
}
