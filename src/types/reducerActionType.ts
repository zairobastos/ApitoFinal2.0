export type reducerActionType = {
    type: string;
    payload: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any;
    };
};
