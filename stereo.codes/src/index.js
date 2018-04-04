import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import stereoStore from './store';

var WebFont = require('webfontloader');
WebFont.load({
  google: {
    families: ['Roboto', 'Playfair Display']
  }
});

ReactDOM.render(
  <Provider store={stereoStore}>
    <App />
  </Provider>,

  document.getElementById('root')
);
registerServiceWorker();
