import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState(false);

    function changeVisible(): void {
        setVisible(!visible);
    }

    return (
        <div>
            <Button onClick={changeVisible}> Reveal Answer</Button>
            <p>The answer is {visible && <span>42</span>}</p>
        </div>
    );
}
