import React from 'react';
import { mount } from 'enzyme';
import Divider from '../../../components/01_atoms/Divider';

describe('<Divider />', () => {
  const wrapper = mount(<Divider label="hello world"/>);
  it('should render', () => {
    expect(wrapper.exists()).toBe(true)
  });
  it('needs to have a label', () => {
    expect(wrapper.props().label).toEqual('hello world')
  });
});
