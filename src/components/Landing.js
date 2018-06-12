import React from 'react';
import Particles from './Particles';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
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
            
            <FormattedHTMLMessage id="app.title"
                defaultMessage="Hello, I'm <span id='name'>{who}</span>.<br/>"
                description="Welcome header on app main page"
                values={{ who: 'Mike Donkers' }} />

            <FormattedMessage id="app.intro"
                defaultMessage="I'm an aspiring web-/app developer."
                description="Intro on app main page" />
        </p>
    </div>

const About = (props) => 
    <div className="about">
        <div className="heading">
            <h1>About</h1>
            <div className="bar"/>
        </div>
    </div>

export default LandingPage