import './App.css';
import { useState } from 'react';
import HarmonicHit6 from "./harmonic-hit-6.wav";

function Controls({displayText, handleSlide, onInput}){

  return (
    <div id="controls">
    <h1>Drum Machine</h1>
      <div id="display">
        {displayText}
      </div>
      <div id="volumeContainer">
        <label>Volume</label>
        <input type="range" min="0.0" max="1.0" step="0.01" id="slider" defaultValue="0.5" onInput={onInput}></input>
      </div>
    </div>
  )
}

function Pad({sample, onClick, padLabel, src}) {
  return (
    <button className="drum-pad" id={sample} value={sample} onClick={onClick}>
      {padLabel}
      <audio src={src} id={padLabel} className="clip"></audio>
    </button>
  )
}

function App() {
  
  const [sample, setSample] = useState('') 
  const [displayText, setDisplayText] = useState('')

  function handleClick(e){
    const x = e.target.children[0]
    setDisplayText(e.target.id)
    x.play();
  }

  window.addEventListener("keydown", playKB, false)

  function playKB(e){
    let keyPressed = e.key.toUpperCase()
    let keys = ["Q","W","E","A","S","D","Z","X","C"]
    if(keys.some((x)=>x === keyPressed)){
      console.log(keyPressed)
      let audio = document.getElementById(keyPressed)
      let text = audio.parentElement.id
      setDisplayText(text)
      audio.play();
    }
  }

  function handleSlide(e){
    let audio = document.getElementsByTagName("audio")
    for(let x = 0; x<audio.length; x++){
      audio[x].volume = e.target.value;
    }
  }
   
  return (
    <div id="drum-machine">
      <div id="interface">
        <div id="buttonContainer">
          <Pad sample="Harmonic Hit 6" onClick={handleClick} padLabel="Q" src={HarmonicHit6} />
          <Pad sample="heater 2" onClick={handleClick} padLabel="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
          <Pad sample="heater 3" onClick={handleClick} padLabel="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
          <Pad sample="heater 4" onClick={handleClick} padLabel="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
          <Pad sample="Clap" onClick={handleClick} padLabel="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
          <Pad sample="Open-HH" onClick={handleClick} padLabel="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
          <Pad sample="Kick-n'-Hat" onClick={handleClick} padLabel="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
          <Pad sample="Kick" onClick={handleClick} padLabel="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
          <Pad sample="Closed-HH" onClick={handleClick} padLabel="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />
        </div>
        
        <Controls displayText={displayText} onInput={handleSlide}/>
      </div>
    </div>
  );
}

export default App;