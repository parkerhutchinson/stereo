import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount} from 'enzyme';
import Navigation from '../../../components/03_organisms/Navigation';
import { MockProvider } from '../../../lib/MockProvider';
import Logo from '../../../components/01_atoms/Logo';
import NavLink from '../../../components/01_atoms/NavLink';

describe('<Navigation />', () => {
  const wrapper = mount(
    <MockProvider>
      <Navigation />
    </MockProvider>
  );
  it('should mount', () => {
    expect(wrapper.find(Navigation)).toHaveLength(1);
  });

  it('renders all nav links', () => {
    // hamburger includes another logo
    expect(wrapper.find(Logo)).toHaveLength(2);
    expect(wrapper.find('ul li').length).toEqual(6);
  });
});
