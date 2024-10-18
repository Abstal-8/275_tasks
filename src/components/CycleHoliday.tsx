import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday = "🎃" | "☮️" | "🦃" | "🦅" | "🎄";

    const [holidayState, setHolidayState] = useState<Holiday>("🎃");

    function holidayAlphabetization(): void {
        const holidayAdvance: Record<Holiday, Holiday> = {
            "🎄": "🎃",
            "🎃": "🦅",
            "🦅": "☮️",
            "☮️": "🦃",
            "🦃": "🎄",
        };

        const holidayChange = holidayAdvance[holidayState];
        setHolidayState(holidayChange);
    }

    function holidayByDate(): void {
        const holidayDate: Record<Holiday, Holiday> = {
            "☮️": "🦅",
            "🦅": "🎃",
            "🎃": "🦃",
            "🦃": "🎄",
            "🎄": "☮️",
        };

        const dateChange = holidayDate[holidayState];
        setHolidayState(dateChange);
    }

    return (
        <div>
            <span>Holiday: {holidayState}</span>
            <Button onClick={holidayAlphabetization}>Alphabet</Button>
            <Button onClick={holidayByDate}>Year</Button>
        </div>
    );
}
