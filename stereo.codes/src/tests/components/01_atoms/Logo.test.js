import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../../../components/01_atoms/Logo';

describe('<Logo />', () => {
  it('should mount', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Logo />, div);
  });
});
