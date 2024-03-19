import './App.css';
import { useState } from 'react';
import HarmonicHit6 from "./harmonic-hit-6.wav";

function Display({displayText}){

  return (
    <div id="display">
      {displayText}
    </div>
  )
}

function Pad({sample, onClick, padLabel, src}) {
  
  function playSample(){
    alert()
  }

  return (
    <button className="drum-pad" id={sample} value={sample} onClick={onClick}>
      {padLabel} {sample}
      <audio src={src} id={sample + "audio"} className={padLabel} onClick={playSample}></audio>
    </button>
  )
}

function App() {
  
  const [sample, setSample] = useState('') 
  const [displayText, setDisplayText] = useState('')

  function handleClick(e){
    
    const x = document.getElementById(e.target.id + "audio")
    x.play();
  }

  window.addEventListener("keydown", playKB, false)

  function playKB(e){
    let audio = document.getElementsByClassName(e.key.toUpperCase())
    //var test = document.getElementsByClassName("Q")
    //let x = e.key
    //console.log("HTML element first item: " + test[0], "event key: " + x.toUpperCase())
    let text = audio[0].id
    setDisplayText(text.substring(0, text.length-5))
    audio[0].play();
  }
   
  return (
    <div id="drum-machine">
      <div id="interface">
        <div id="buttonContainer">
          <Pad sample="Harmonic Hit 6" onClick={handleClick} padLabel="Q" src={HarmonicHit6} />
          <Pad sample="heater 2" onClick={handleClick} padLabel="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
          <Pad sample="header 3" onClick={handleClick} padLabel="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
          <Pad sample="heater 4" onClick={handleClick} padLabel="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
          <Pad sample="Clap" onClick={handleClick} padLabel="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
          <Pad sample="Open-HH" onClick={handleClick} padLabel="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
          <Pad sample="Kick-n'-Hat" onClick={handleClick} padLabel="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
          <Pad sample="Kick" onClick={handleClick} padLabel="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
          <Pad sample="Closed-HH" onClick={handleClick} padLabel="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />
        </div>
        <Display displayText={displayText}/>
      </div>
    </div>
  );
}

export default App;