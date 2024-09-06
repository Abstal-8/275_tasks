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
        </div>
    );
}

export default App;
