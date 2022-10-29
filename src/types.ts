export type Games = {
    id: number;
    name: string;
    imageUrl: string;
    gameTags: [];
    studioId: number;
}

export type Studios = {
    id: number;
    name: string;
    imageUrl: string;
}

export type Currencies = {
    studioId: number;
    currencies: [];
}

export type Tags = {
    id: number;
    name: string;
}

export type Options = {
    value: string;
    name: string;
}