import React, {useEffect} from 'react';
import {TimelineMax, TweenMax,  Power4, Circ} from "gsap";
import ScrollMagic from 'scrollmagic';

import './App.css';

function App() {


    useEffect(() => {
        let controller = new ScrollMagic.Controller();
        let tween = TweenMax.fromTo("#animate1", 1,
            {left: -100},
            {left: 100, repeat: -1, yoyo: true, ease: Circ.easeInOut})

        new ScrollMagic.Scene({
            duration: "200%", // the scene should last for a scroll distance of 100px
            offset: 0, // start this scene after scrolling for 50px
            triggerHook: 0,
            triggerElement: "#second"
        })
            .setTween(tween)
            .setPin("#second") // pins the element for the the scene's duration
            .addTo(controller); // assign the scene to the controller

    }, [])


    return (
        <div className="App">
            <div className={'black App-header'} id={'first'}>
                first item
            </div>

            <div className={'App-header '} id={'second'} style={{
                background: 'red'
            }}>
                <h1 id={'secondText'}>Second Text</h1>
            </div>

            <div className={'black App-header'} id={'third'}>
                third item
            </div>

        </div>
    );
}

export default App;
