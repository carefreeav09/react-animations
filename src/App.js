import React, {useEffect} from 'react';
import {TimelineMax, TweenMax, Power1, Circ} from "gsap";
import ScrollMagic from 'scrollmagic';
import {ScrollMagicPluginGsap} from "scrollmagic-plugin-gsap";
import './App.css';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

function App() {

    useEffect(()=>{
        let controller = new ScrollMagic.Controller()

        new ScrollMagic.Scene({
            triggerElement: "#second",
            duration: '100%', // scroll distance
            triggerHook: 0,
        })
            .setTween("#secondText", {
                scale: 0.5,
                color: "green"
            })
            .setPin("#second") // pins the element for the the scene's duration
            .addTo(controller); // assign the scene to the controller

        let array = ['#firstCircle', '#secondCircle', '#thirdCircle', '#fourthCircle'];
        let tl = new TimelineMax({
            yoyo: true
        });
        //UP DOWN
        // tl.fromTo('#firstCircle', 1,  {y: '100px', ease: Power1.easeNone, delay: '-1'}, {y: '-100px', ease: Power1.easeNone, delay: '-1'}).yoyo(true).repeat(-1).timeScale(2).play(-0.5);
        // tl.fromTo('#secondCircle', 1,  {y: '-100px', ease: Power1.easeNone, delay: '-1'}, {y: '100px', ease: Power1.easeNone, delay: '-1'}).yoyo(true).repeat(-1).timeScale(2).play(-0.5);
        // tl.fromTo('#thirdCircle', 1,  {y: '100px', ease: Power1.easeNone, delay: '-1'}, {y: '-100px', ease: Power1.easeNone, delay: '-1'}).yoyo(true).repeat(-1).timeScale(2).play(-0.5);
        // tl.fromTo('#fourthCircle', 1,  {y: '-100px', ease: Power1.easeNone, delay: '-1'}, {y: '100px', ease: Power1.easeNone, delay: '-1'}).yoyo(true).repeat(-1).timeScale(2).play(-0.5);

        //Fade In fade Out -> pretty good
        // tl.staggerFromTo(array, 2,
        //     {autoAlpha:0,ease:Power1.easeIn},
        //     {autoAlpha:1,ease:Power1.easeIn}
        //     , 1)
        //     .staggerTo(array, 2, {autoAlpha:0,ease:Power1.easeIn},1)
        //     .yoyo(false).repeat(-1).timeScale(2).play(0);

        // Sequential Up Down -> the best so far
        tl.staggerFromTo(array, 2, {y: '50', ease: Power1.easeInOut}, {y: '0', ease: Power1.easeInOut}, .5)
            .staggerTo(array, 2, {y: '50', ease: Power1.easeInOut},.5)
            .yoyo(false).repeat(-1).timeScale(2).play(-1)

    }, [])



    return (
        <div className="App">
            <div className="App-header">
                <svg width="100vh" height="100vh">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{
                                stopColor:'#f1f428',
                                stopOpacity:1
                            }} />
                            <stop offset="100%" style={{
                                stopColor:'#f5a83b',
                                stopOpacity:1
                            }}  />
                        </linearGradient>
                        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{
                                stopColor:'#6bf43a',
                                stopOpacity:1
                            }} />
                            <stop offset="100%" style={{
                                stopColor:'#a7f58e',
                                stopOpacity:1
                            }}  />
                        </linearGradient>
                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{
                                stopColor:'#423af4',
                                stopOpacity:1
                            }} />
                            <stop offset="100%" style={{
                                stopColor:'#27c9f5',
                                stopOpacity:1
                            }}  />
                        </linearGradient>
                        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{
                                stopColor:'#f43883',
                                stopOpacity:1
                            }} />
                            <stop offset="100%" style={{
                                stopColor:'#f55535',
                                stopOpacity:1
                            }}  />
                        </linearGradient>
                    </defs>
                    <circle cx="150" cy="350" r="40" fill="url(#grad1)" id='firstCircle' />
                    <circle cx="250" cy="350" r="40" fill="url(#grad2)" id='secondCircle' />
                    <circle cx="350" cy="350" r="40" fill="url(#grad3)" id='thirdCircle' />
                    <circle cx="450" cy="350" r="40" fill="url(#grad4)" id='fourthCircle' />

                </svg>
            </div>
        </div>
    );
}

export default App;
