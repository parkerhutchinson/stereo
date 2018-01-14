import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import stereoApp from '../reducers/stereo-reducers';

const stereoStore = createStore(stereoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const MockProvider = ({children}) => {
  return (
    <Provider store={stereoStore}>
      {children}
    </Provider>
  );
};
