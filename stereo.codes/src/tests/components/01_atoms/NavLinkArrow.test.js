import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import NavLinkArrow from '../../../components/01_atoms/NavLinkArrow';
import { MockProvider } from '../../../lib/MockProvider';

describe('<NavLinkArrow />', () => {
  const props = {
    url: '#test',
    title: 'hello world',
  };

  const wrapper = mount(
    <MockProvider>
      <NavLinkArrow url={props.url} title={props.title}/>
    </MockProvider>
  );
  it('should mount', () => {
    expect(wrapper.find(NavLinkArrow)).toHaveLength(1);
  });

  it('displays a title', () => {
    expect(wrapper.find(NavLinkArrow).text()).toEqual("hello world");
  });

  it('has a href attribute value', () => {
    expect(wrapper.find(NavLinkArrow).find('a').prop('href')).toEqual("#test");
  });

});
