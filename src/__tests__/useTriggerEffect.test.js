import React, { useEffect } from "react";
import { render, wait } from "react-testing-library";
import { createTrigger } from "../createTrigger";
import { useTrigger } from "../useTrigger";
import { useTriggerEffect } from "../useTriggerEffect";

describe("useTriggerEffect", () => {
    it("call trigger", async () => {
        const trigger = createTrigger();
        const effect = jest.fn();

        const Component = () => {
            useTriggerEffect(() => {
                effect();
            }, trigger);

            return <div />;
        };

        const { container, rerender } = render(<Component />);

        await wait(() => {
            trigger();
        });

        await wait(() => {
            rerender(<Component />);

            expect(effect.mock.calls.length).toEqual(2);
        });
    });
});
