import './App.css';
import PawnStars from "./PawnStars.mp3"

function App() {
  return (
    <div id="drum-machine">
      <div id="interface">
        <div id="buttonContainer">
          <button className="drum-pad" id="heater1">
            Q
            <audio controls src={PawnStars}></audio>
          </button>
          <button className="drum-pad" id="heater2">W</button>
          <button className="drum-pad" id="heater3">E</button>
          <button className="drum-pad" id="heater4">A</button>
          <button className="drum-pad" id="Clap">S</button>
          <button className="drum-pad" id="Open-HH">D</button>
          <button className="drum-pad" id="Kick-n'-Hat">Z</button>
          <button className="drum-pad" id="Kick">X</button>
          <button className="drum-pad" id="Closed-HH">C</button>
        </div>
        <div id="display">
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
