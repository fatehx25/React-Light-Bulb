import logo from './logo.svg';
import './App.css';
import switchedoffbulb from "./images/switchedoffbulb.png";
import { useState, useEffect, useRef } from "react";

function App() {
  const [label, changeLabel] = useState(false);
  const buttonElement = useRef(null);
  const switchBoardElement = useRef(null);

  useEffect(() => {
    console.log(buttonElement.current);
    if (label) {
      buttonElement.current.style.animation = "slide-up 1s";
      buttonElement.current.style.bottom = "10px";
    } else {
      buttonElement.current.style.animation = "slide-down 1s";
      buttonElement.current.style.bottom = "-21px";
    }
  }, [label]);
  
  return (
    <div className="App">
      <header className="App-header">
        {/* image of bulb */}
        <img src={logo} className="App-logo" alt="logo"
          style={ label? 
          { filter:`contrast(100%) 
                    brightness(400%) 
                    drop-shadow(0px 10px 70px #c4f1fe)
                    drop-shadow(10px 0px 70px #c4f1fe)
                    drop-shadow(0px -10px 70px #c4f1fe)
                    drop-shadow(-10px 0px 70px #c4f1fe)` } : 
          {filter:"contrast(0)"} } />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div ref={ switchBoardElement } className='switch-board' >
          <button ref={ buttonElement } onClick= { setLabel } > { label? "ON" : "OFF" } </button>
        </div>
      </header>
      <img src={ switchedoffbulb } alt="switched off bulb" />
    </div>
  );
  // function animateButton(strCSSVal) {
  //   return new Promise(resolve => {
  //     buttonElement.current.style.animation = strCSSVal;
  //     resolve("done");
  //   });
  // }
  function setLabel() {
    return ( label? 
      changeLabel(false) : changeLabel(true) ); 
  }
}

export default App;
