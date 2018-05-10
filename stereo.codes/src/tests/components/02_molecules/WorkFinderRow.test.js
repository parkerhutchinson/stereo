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
  const wrapper = mount(<WorkFinderRow {...props} />);

  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should have an id', () => {
    expect(wrapper.props().id).toEqual(props.id);
  });
  it('should show a year', () => {
    expect(wrapper.props().year).toEqual(props.year);
    expect(wrapper.find('.workfinder-row-name dl dt').textContent).toEqual(props.year);
  });
  it('should have a title', () => {
    expect(wrapper.props().title).toEqual(props.title);
    expect(wrapper.find('.workfinder-row-name dl dd').textContent).toEqual(props.title);
  });
  it('should have a title', () => {
    expect(wrapper.props().title).toEqual(props.title);
    expect(wrapper.find('.workfinder-row-name dl dd').textContent).toEqual(props.title);
  });
})
