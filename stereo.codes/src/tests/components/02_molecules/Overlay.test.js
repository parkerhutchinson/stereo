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
    const overlay = mount(<GridOverlay />)
    expect(overlay.state().isActive).toEqual(false);
  });

  it('should toggle active when clicked', () => {
    const overlay = shallow(<GridOverlay />)

    // toggle on
    overlay.find('button').simulate('click');
    expect(overlay.state().isActive).toEqual(true);

    // toggle off
    overlay.find('button').simulate('click');
    expect(overlay.state().isActive).toEqual(false);
  });
});
