import React from 'react';
import { shallow, mount } from 'enzyme';
import Copy from '../../../components/03_organisms/Copy';

describe('<CopyHeader />', () => {
  const props = {
    title: 'hello world',
    grid: 8
  }

  const wrapper = mount(<Copy title={props.title} grid={8} classes="hello world"/>);

  it('Should render', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('accepts custom classes', () => {
    expect(wrapper.find('article').hasClass('hello')).toEqual(true);
    expect(wrapper.find('article').hasClass('world')).toEqual(true);
  });

  it('creates grid classes based on props', () => {
    expect(wrapper.props().grid).toBe(8);
    expect(wrapper.find('.copy').hasClass('grid-col-8')).toEqual(true);
  });

  it('accepts optional sub title', () => {
    const subTitle = mount(<Copy title={props.title} subTitle="hello world"/>);
    expect(subTitle.props().subTitle).toEqual('hello world');
  });

});
