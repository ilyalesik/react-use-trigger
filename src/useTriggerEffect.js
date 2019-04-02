// @flow
import { useEffect, useState } from "react";
import type { TriggerWrapper } from "./TriggerWrapper";
import { useTrigger } from "./useTrigger";

type MaybeCleanUpFn = void | (() => void);

export const useTriggerEffect = (create: () => MaybeCleanUpFn, trigger: TriggerWrapper) => {
    const triggerValue = useTrigger(trigger);

    useEffect(create, [triggerValue]);
};
