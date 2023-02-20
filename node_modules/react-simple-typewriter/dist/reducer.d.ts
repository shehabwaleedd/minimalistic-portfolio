export type State = {
    speed: number;
    text: string;
    count: number;
};
export type Action = {
    type: 'DELAY';
    payload: number;
} | {
    type: 'TYPE';
    payload: string;
    speed: number;
} | {
    type: 'DELETE';
    payload: string;
    speed: number;
} | {
    type: 'COUNT';
};
export declare function reducer(state: State, action: Action): State;
