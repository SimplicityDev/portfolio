import React from 'react';
import Particles from './Particles';
const LandingPage = () =>
    <div>
        <Hero />
        <About />
    </div>

const Hero = () => 
    <div className="hero">
        <Particles className="particles"/>
        <p className="intro">
            {/* Welkom, Ik ben <span id="name">Mike Donkers</span>.<br />Een aspirerend web-/app ontwikkelaar */}
            Hello, I'm <span id="name">Mike Donkers</span>.<br/>I'm an aspiring web-/app developer.
        </p>
    </div>

const About = () => 
    <div className="about">
        <div className="heading">
            <h1>About</h1>
            <div className="bar"/>
        </div>
    </div>

export default LandingPage