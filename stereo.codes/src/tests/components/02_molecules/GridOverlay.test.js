import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import GridOverlay from '../../../components/02_molecules/GridOverlay';

describe('<GridOverlay />', () => {
  it('should mount', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GridOverlay />, div);
  });

  it('should be deactivated on mount', () => {
    const overlay = mount(<GridOverlay />);
    expect(overlay.state().isActive).toEqual(false);
  });

  it('toggles active when clicked', () => {
    const wrapper = shallow(<GridOverlay />);

    // toggle on
    wrapper.find('button').simulate('click');
    expect(wrapper.state().isActive).toEqual(true);

    // toggle off
    wrapper.find('button').simulate('click');
    expect(wrapper.state().isActive).toEqual(false);
  });

  it('sets the body class to "overlay"', () => {
    const wrapper = shallow(<GridOverlay />);
    wrapper.find('button').simulate('click');
    expect(document.body.classList).toContain('overlay');
  });
});
