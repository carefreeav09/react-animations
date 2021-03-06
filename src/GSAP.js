import React from 'react';
import {TimelineMax, Power4} from "gsap";
import './App.css';

function App() {
    let c = '#expandButton';
    let d = '#showDiv';
    const timeline = new TimelineMax({
        smoothChildTiming: true,
        yoyo: true
    });

    const handleAnimationExpand = () => {
        timeline
            .set(`${c}`, {className: '+=btn expanded'})
            .set(`${d}`, {className: '+= mt-5 expanded'})
            .from(`${c}`, 0, { y: 0})
            .to(`${c}`, 1, { width: '300px', ease: Power4.easeIn})
            .to(`${d}`, 0, {display: 'block'})
            .to(`${d}`, 2, {opacity: 1, ease: Power4.easeInOut}, '-=0.5')
            .to(`${d}`, 2 , {height: '400px', ease: Power4.easeInOut, delay: '-2'})
    };

    const handleAnimationOnClick = () => {
        let isExpanded = document.getElementsByClassName('expanded');
        isExpanded.length === 0 ? handleAnimationExpand() : handleAnimationClose()
    };

    const handleAnimationClose = () => {
        timeline
            .set(`${c}`, {className: '-=btn'})
            .set(`${d}`, {className: '-=mt-5'})
            .to(`${d}`, 2 , {height: '0', ease: Power4.easeInOut, opacity: 0})
            .to(`${c}`, 1, { width: '80px', ease: Power4.easeInOut, delay: '-0.5'})
            .to(`${c}`, 1, { yPercent: 0, ease: Power4.easeInOut, delay: '-1'})
            .to(`${d}`, 0, {display: 'none'})
    }

    return (
        <div className="App">
            <header className="App-header">
                <button className={'btn'} id='expandButton' style={{
                    background: '#111',
                    color: 'white'
                }} onClick={()=> handleAnimationOnClick()} > Expand </button>

                <div id={'showDiv'}  className="card mt-5" style={{
                    display: "none",
                    opacity: 0
                }}>
                    <div className="card-body d-flex justify-content-center align-items-center" style={{
                        height: '100%',
                        background: 'linear-gradient(45deg, #2c3e50, #fd746c)'
                    }}>
                        <h1 className={'white-text text-uppercase'}>Animation</h1>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
