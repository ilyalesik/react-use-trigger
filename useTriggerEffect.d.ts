import { TriggerWrapper} from "./types/TriggerWrapper"
type MaybeCleanUpFn = (void | (() => void))
declare function useTriggerEffect(create: (() => MaybeCleanUpFn), trigger: TriggerWrapper): void;

export = useTriggerEffect;
