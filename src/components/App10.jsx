import React from "react";
import { useState } from "react";
import "./App10.css";
export default function App10() {
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [message, setMessage] = useState("Let's begin the game");
 
  const handleRun = () => {
    if(wicket < 10) {
        setRun(run+1)
        setMessage('Well Done')
    }
  }

  const handleWicket = () => {
    if(wicket === 9){
        setWicket(wicket+1)
        setMessage("Game Over")
      }
    else if(wicket < 10){
        setWicket(wicket+1)
        setMessage("Better Luck Next Time")
    }
  }

  return (
    <div className="App-App10-Container">
        <h3><center>This is App10</center></h3>
        <div className="App-App10-Row">
            <div className="App-App10-Box">
                <button onClick={handleRun} >Run</button>
                <p>{run}</p>
            </div>
            <div className="App-App10-Box">
                <button onClick={handleWicket}>Wicket</button>
                <p>{wicket}</p>
            </div>
        </div>
        
        <hr></hr>
        <div className="App-App10-Row">
            <div className="App-App10-Box"> {message} </div>
        </div>
    </div>
  );
}
