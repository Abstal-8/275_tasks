import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">UD CISC275 Hello World</header>
            <p>Derek Johnson</p>
            <h1>New header!</h1>
            <img src="../img_assets/Oranges.jpg" alt="Oranges." />
            <ol>
                <p>Top 3 favorite anime of all time.</p>
                <li>1. Yu Yu Hakusho</li>
                <li>2. Log Horizon</li>
                <li>3. FLCL</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                {" "}
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
