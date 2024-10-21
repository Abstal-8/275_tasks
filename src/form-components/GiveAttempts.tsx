import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [remainingAttempts, setAttempts] = useState<number>(3);
    const [requestAttempts, setRequests] = useState<string>("");

    function updateText(event: React.ChangeEvent<HTMLInputElement>) {
        setRequests(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="quizAttempt">
                <Form.Label>Quiz</Form.Label>
                <Form.Control
                    type="number"
                    value={requestAttempts}
                    onChange={updateText}
                />
            </Form.Group>

            <Button
                onClick={() => {
                    setAttempts(remainingAttempts - 1);
                }}
                disabled={remainingAttempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(
                        remainingAttempts + (parseInt(requestAttempts) || 0),
                    );
                }}
            >
                gain
            </Button>

            <h3>Give Attempts</h3>
            {remainingAttempts}
        </div>
    );
}
