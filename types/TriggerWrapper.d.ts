
export type TriggerWrapper = {
    id: string;
    subscribe: ((f: (() => unknown)) => void);
    unsubscribe: ((f: (() => unknown)) => void);
    (): void
}
