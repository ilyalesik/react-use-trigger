// @flow
import { useEffect, useState } from "react";
import type { TriggerWrapper } from "./TriggerWrapper";

export const useTrigger = (trigger: TriggerWrapper): string => {
    const [value, setValue] = useState(trigger.id);

    const update = () => setValue(trigger.id);

    useEffect(() => {
        trigger.subscribe(update);
        return () => trigger.unsubscribe(update);
    }, []);

    return value;
};
