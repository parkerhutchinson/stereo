import React from 'react'
import { mount } from 'enzyme';
import WorkFinderRow from '../../../components/02_molecules/WorkFinderRow';

describe('<WorkFindeRow />', () => {
  const props = {
    id: 2,
    date: '2017',
    name: 'prpl.rs',
    stack: ['Angular 1.x', 'CSS3', 'nginx'],
    position: 'Front-end',
  }
  const wrapper = mount(<WorkFinderRow props />);

  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
})
