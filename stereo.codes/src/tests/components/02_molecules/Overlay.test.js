import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {mount, shallow} from 'enzyme';
import GridOverlay from '../../../components/02_molecules/GridOverlay';

describe('<GridOverlay />', () => {
  it('should mount', () => {
    const div = document.createElement('div');
    React.render(<GridOverlay />, div);
  });

  it('should be deactivated on mount', () => {
    const overlay = mount(<GridOverlay />)
    expect(overlay.state().isActive).to.equal(false);
  });

  it('should toggle active when clicked', () => {
    const overlay = shallow(<GridOverlay />)

    // toggle on
    overlay.find('button').simulate('click');
    expect(overlay.state().isActive).to.equal(true);

    // toggle off
    overlay.find('button').simulate('click');
    expect(overlay.state().isActive).to.equal(false);
  });
});
