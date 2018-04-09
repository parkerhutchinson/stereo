import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import * as actions from '../../../actions/grid-actions';
import GridOverlayButton from '../../../components/01_atoms/GridOverlayButton';
import { MockProvider } from '../../../lib/MockProvider';
import configureStore from 'redux-mock-store';

describe('<GridOverlayButton />', () => {
  const initialState = {
    grid: {
      activate: false
    }
  }
  const mockStore = configureStore();
  const store = mockStore(initialState);

  const wrapper = mount(
    <MockProvider>
      <GridOverlayButton />
    </MockProvider>
  );
  const wrapperMock = mount(shallow(<GridOverlayButton store={store} />).get(0));

  // action testing
  const show = true;
  const expectedAction = {
    type: actions.GRID_ACTIVATE,
    show
  }

  it('should render', () => {
    expect(wrapper.find(GridOverlayButton).exists()).toBe(true);
  });

  it('toggles active when clicked', () => {
    // toggle on
    wrapperMock.find('button').simulate('click');
    expect(wrapperMock.state('isActive')).toEqual(true);
  });

  it('shouild trigger the grid overlay action', () => {
    expect(actions.gridActivate(show)).toEqual(expectedAction);
  });
});
