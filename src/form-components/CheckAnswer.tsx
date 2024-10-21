import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setAnswer] = useState<string>("");

    function updateText(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="checkingAnswer">
                <Form.Label>Answer this question</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={givenAnswer}
                    onChange={updateText}
                />
            </Form.Group>
            <h3>Check Answer</h3>
            {givenAnswer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
