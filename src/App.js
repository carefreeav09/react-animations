import React from 'react';
import {TimelineMax, Power4} from "gsap";
import './App.css';
import styled from "styled-components";

function App() {


    const handleAnimationOnClick = () => {
        const timeline = new TimelineMax();
        let c = '#expandButton';
        let d = '#showDiv';
        timeline.from(`${c}`, 0, { y: 0})
            .to(`${c}`, 1, { width: '300px', ease: Power4.easeIn})
            .to(`${d}`, 0, {display: 'block'})
            .to(`${d}`, 2, {opacity: 1, ease: Power4.easeInOut}, '-=0.5')
            .to(`${d}`, 2 , {height: '400px', ease: Power4.easeInOut, delay: '-1'})
    };

  return (
    <div className="App">
      <header className="App-header">
        <button className={'btn btn-success'} id='expandButton' onClick={handleAnimationOnClick} > Expand </button>

          <div id={'showDiv'}  className="card mt-5" style={{
              display: "none",
              opacity: 0
          }}>
                  <div className="card-body">
                      <h1 className={'text-primary'}>Show me later</h1>
                  </div>
          </div>
      </header>
    </div>
  );
}

export default App;
