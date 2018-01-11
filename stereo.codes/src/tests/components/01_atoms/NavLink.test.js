import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import NavLink from '../../../components/01_atoms/NavLink';

describe('<NavLink />', () => {
  const props = {
    url: '#test',
    title: 'hello world',
  };
  const wrapper = shallow(<NavLink url={props.url} title={props.title} />);
  it('should mount', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavLink url={props.url} title={props.title}/>, div);
  })
  it('displays a title', () => {
    expect(wrapper.text()).toMatch("hello world");
  });
  it('has a href attribute value', () => {
    expect(wrapper.prop('href')).toMatch("#test");
  });
});
