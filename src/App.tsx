import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): React.JSX.Element {
    return (
        <div className="App">
<<<<<<< HEAD
            <header className="App-header">UD CISC275 Hello World</header>
            <p>Derek Johnson</p>
            <h1>New header!</h1>
            <img src="../img_assets/Oranges.jpg" alt="Oranges." />
            <div
                style={{ backgroundColor: "red", width: "50%", height: "30%" }}
            >
                <ol>
                    <p>Top 3 favorite anime of all time.</p>
                    <li>Yu Yu Hakusho</li>
                    <li>Log Horizon</li>
                    <li>FLCL</li>
                </ol>
            </div>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                {" "}
                Log Hello World
            </Button>
=======
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
