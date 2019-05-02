import React, { useEffect } from "react";
import { render, wait } from "react-testing-library";
import createTrigger from "../index";
import useTrigger from "../useTrigger";

describe("useTrigger", () => {
    it("call trigger", async () => {
        const trigger = createTrigger();
        const effect = jest.fn();

        const Component = () => {
            const triggerValue = useTrigger(trigger);

            useEffect(() => {
                effect();
            }, [triggerValue]);

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
