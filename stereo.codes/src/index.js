import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Stereo from './Stereo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Stereo />, document.getElementById('root'));
registerServiceWorker();
