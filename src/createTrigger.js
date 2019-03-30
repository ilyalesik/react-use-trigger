// @flow
import nanoid from "nanoid";
import { useState, useEffect } from "react";
import type { TriggerWrapper } from "./TriggerWrapper";

export const createTrigger = (): TriggerWrapper => {
    const trigger = () => {
        trigger.id = nanoid();
        for (const subscriber of trigger.subscribers) {
            subscriber();
        }
    };

    trigger.id = nanoid();
    trigger.subscribers = [];

    trigger.subscribe = f => {
        trigger.subscribers.push(f);
    };

    trigger.unsubscribe = f => {
        trigger.subscribers.indexOf(f) >= 0 && trigger.subscribers.splice(trigger.subscribers.indexOf(f), 1);
    };

    return trigger;
};
