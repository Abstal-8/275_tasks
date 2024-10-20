import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({
    dValue,
    setDValue,
}: {
    dValue: number;
    setDValue: (num: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDValue(2 * dValue);
            }}
        >
            Double
        </Button>
    );
}

function Halver({
    hValue,
    setHValue,
}: {
    hValue: number;
    setHValue: (num: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setHValue(0.5 * hValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState(10);

    const doubleVal = () => {
        setDhValue(2 * dhValue);
    };
    const halfVal = () => {
        setDhValue(0.5 * dhValue);
    };

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dValue={dhValue} setDValue={doubleVal}></Doubler>
            <Halver hValue={dhValue} setHValue={halfVal}></Halver>
        </div>
    );
}
