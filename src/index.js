import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/'
import './index.css'; 
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const render = component => {
    ReactDOM.render(<Route/>,document.getElementById('root'))
}

render();
