// @flow

export type TriggerWrapper = {
    id: string,
    subscribe: (f: () => mixed) => void,
    unsubscribe: (f: () => mixed) => void,
    (): void
};
