import React from 'react';
import ReactDOM from 'react-dom';
import Stereo from '../Stereo';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stereo />, div);
});
