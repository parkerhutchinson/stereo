import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount} from 'enzyme';
import Navigation from '../../../components/03_organisms/Navigation';

describe('<Navigation />', () => {
  it('should mount', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navigation />, div);
  });

  it('renders all nav links', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find('Logo').length).toEqual(1);
    expect(wrapper.find('ul NavLink').length).toEqual(3);
  });
});
