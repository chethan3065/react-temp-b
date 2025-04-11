import React from "react";
import { useState, useRef } from "react";
import "./App10.css";
export default function App10() {
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [message, setMessage] = useState("Let's begin the game");
  const runRef = useRef();
  const wicketRef = useRef();
  const msgRef = useRef()
 
  const handleRun = (v) => {
    if(wicket < 10) {
        setRun(run+v)
        setMessage('Well Done')
        if(v===4) runRef.current.style.backgroundColor = "red"
        runRef.current.style.backgroundColor = "green";
        wicketRef.current.style.backgroundColor = "white";
        msgRef.current.style.backgroundColor = "yellow"
    }
  }

  const handleWicket = () => {
    if(wicket === 9){
        setWicket(wicket+1)
        setMessage("Game Over")
        msgRef.current.style.backgroundColor = "red"
        runRef.current.style.backgroundColor = "white";
        wicketRef.current.style.backgroundColor = "white";
      }
    else if(wicket < 10){
        setWicket(wicket+1)
        setMessage("Better Luck Next Time")
        runRef.current.style.backgroundColor = "white";
        wicketRef.current.style.backgroundColor = "red";
        msgRef.current.style.backgroundColor = "yellow"

    }
  }

  return (
    <div className="App-App10-Container">
        <h3><center>This is App10</center></h3>
        <div className="App-App10-Row">
            <div className="App-App10-Box" ref={runRef}>
                <label><h3>Runs</h3></label>
                <p>{run}</p>
                <button onClick={() => handleRun(1)}>1</button>
                <button onClick={() => handleRun(2)}>2</button>
                <button onClick={() => handleRun(3)}>3</button>
                <button onClick={() => handleRun(4)}>4</button>
                <button onClick={() => handleRun(6)}>6</button>
            </div>
            <div className="App-App10-Box" ref={wicketRef}>
                <button onClick={handleWicket}>Wicket</button>
                <p>{wicket}</p>
            </div>
        </div>
        
        <hr></hr>
        <div className="App-App10-Row">
            <div className="App-App10-Box" ref={msgRef}> <h3>{message}</h3> </div>
        </div>
    </div>
  );
}
