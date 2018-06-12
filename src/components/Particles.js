import React from 'react';
import 'particles.js/particles';  




class Particles extends React.Component {
    componentDidMount() {
        const particlesJS = window.particlesJS;
        particlesJS.load('particles-js', '/portfolio/particles.json', function () {
            console.log('callback - particles.js config loaded');
        });
    }
    render() {
        return (
            <div id="particles-js"></div>
        )
    }
} 

export default Particles