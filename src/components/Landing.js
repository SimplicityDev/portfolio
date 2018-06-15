import React from 'react';
import Particles from './Particles';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import moment from 'moment'
import About from './About'
const LandingPage = () =>
    <div>
        <Hero />
        <About />
    </div>

const Hero = () => 
    <div className="hero">
        <Particles className="particles"/>
        <p className="intro">            
            <FormattedHTMLMessage id="app.title"
                defaultMessage="Hello, I'm <span id='name'>{who}</span>.<br/>"
                description="Welcome header on app main page"
                values={{ who: 'Mike Donkers' }} />

            <FormattedMessage id="app.intro"
                defaultMessage="I'm an aspiring web-/app developer."
                description="Intro on app main page" />
        </p>
        <ScrollButton />
    </div>

const ScrollButton = () => 
    <span className="scroll-btn">
        <a href="#about">
            <span className="mouse">
                <span>
                </span>
            </span>
        </a>
        <p>Scroll</p>
    </span>
export default LandingPage