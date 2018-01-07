import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../../components/atoms/Button';

it('Should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
});
