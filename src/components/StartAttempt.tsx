import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [currentAttempts, setAttempts] = useState(4);
    const [isQuizStarted, setQuiz] = useState(false);

    function startQuiz(): void {
        setQuiz(isQuizStarted ? isQuizStarted : true);
        setAttempts(currentAttempts - 1);
    }

    function stopQuiz(): void {
        setQuiz(false);
    }

    function mulliganIncrease(): void {
        setAttempts(currentAttempts + 1);
    }

    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={isQuizStarted || currentAttempts === 0}
            >
                {" "}
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!isQuizStarted}>
                {" "}
                Stop Quiz
            </Button>
            <Button onClick={mulliganIncrease} disabled={isQuizStarted}>
                {" "}
                Mulligan
            </Button>

            <p>Attempts: {currentAttempts}</p>
        </div>
    );
}
