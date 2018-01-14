import React from 'react';
import { shallow, mount } from 'enzyme';
import CopyHeader from '../../../components/02_molecules/CopyHeader';
const now = new Date(Date.now()).toISOString();

describe(`<CopyHeader /> ${now}`, () => {
  const props = {
    title: "hello world",
  }
  const wrapper = mount(<CopyHeader title={props.title} />);

  it('Should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('has a title', () => {
    expect(wrapper.props().title).toEqual("hello world");
  })
});
