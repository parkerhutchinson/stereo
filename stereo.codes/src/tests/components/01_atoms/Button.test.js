import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../../components/01_atoms/Button';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
});
