import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, Categories} from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
ReactDOM.render(<Categories />, document.getElementById('app'));
registerServiceWorker();