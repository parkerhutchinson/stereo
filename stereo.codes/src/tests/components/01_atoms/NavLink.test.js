import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import NavLink from '../../../components/01_atoms/NavLink';
import { MockProvider } from '../../../lib/MockProvider';
import sinon from 'sinon';

describe('<NavLink />', () => {
  const props = {
    url: '#test',
    title: 'hello world',
  };
  
  // const spyScrollTo = sinon.spy(NavLink.prototype, 'handleScrollTo');
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

  it('should call handleScrollTo when clicked', () => {
    wrapper.find(NavLink).simulate('click');
    // expect(spyScrollTo.calledOnce).toBe(true);
    // sinon.restore();
  })

});
