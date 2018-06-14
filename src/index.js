import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ReallySmoothScroll from 'really-smooth-scroll'
ReallySmoothScroll.shim()
ReactDOM.render(
    <App />, document.getElementById('root'));
registerServiceWorker();
