import './App.css';
import { useState } from 'react';
import PawnStars from "./PawnStars.mp3";

function Display({displayText}){

  return (
    <div id="display">
      {displayText}
    </div>
  )
}

function Pad({sample, onClick, padLabel}) {
  
  return (
    <button className="drum-pad" id={sample} onClick={onClick}>
      {padLabel}
    </button>
  )
}

function App() {
  
  const [sample, setSample] = useState('') 
  const [displayText, setDisplayText] = useState('')

  function handleClick(){
    setDisplayText({sample})
  }
  
  return (
    <div id="drum-machine">
      <div id="interface">
        <div id="buttonContainer">
          <button className="drum-pad" id="heater1">
            Q
            <audio src={PawnStars}></audio>
          </button>
          <Pad sample="heater2" onClick={handleClick} padLabel="W" />
          <Pad sample="header3" onClick={handleClick} padLabel="E" />
          <Pad sample="heater4" onClick={handleClick} padLabel="A" />
          <Pad sample="Clap" onClick={handleClick} padLabel="S" />
          <Pad sample="Open-HH" onClick={handleClick} padLabel="D" />
          <Pad sample="Kick-n'-Hat" onClick={handleClick} padLabel="Z" />
          <Pad sample="Kick" onClick={handleClick} padLabel="X" />
          <Pad sample="Closed-HH" onClick={handleClick} padLabel="C" />
        </div>
        <Display displayText={displayText}/>
      </div>
    </div>
  );
}

export default App;