import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import NavLink from '../../../components/01_atoms/NavLink';
import { MockProvider } from '../../../scripts-lib/MockProvider';

describe('<NavLink />', () => {
  const props = {
    url: '#test',
    title: 'hello world',
  };

  const wrapper = mount(
    <MockProvider>
      <NavLink url={props.url} title={props.title} />
    </MockProvider>
  );

  it('should mount', () => {
    expect(wrapper.find(NavLink)).toHaveLength(1);
  });

  it('displays a title', () => {
    expect(wrapper.find(NavLink).text()).toEqual("hello world");
  });

  it('has a href attribute value', () => {
    expect(wrapper.find(NavLink).find('a').prop('href')).toEqual("#test");
  });

});
