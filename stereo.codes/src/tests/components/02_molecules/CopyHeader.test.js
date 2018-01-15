import React from 'react';
import { shallow, mount } from 'enzyme';
import CopyHeader from '../../../components/02_molecules/CopyHeader';


describe('<CopyHeader />', () => {
  const props = {
    title: "hello world",
    subTitle: "hello sub world",
  }
  const wrapper = mount(<CopyHeader title={props.title} />);

  it('Should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('has a title', () => {
    expect(wrapper.props().title).toEqual("hello world");
  });

  it('can accept a subtitle', () => {

    const subtitleWrapper = mount(<CopyHeader title={props.title} subTitle={props.subTitle} />);
    expect(subtitleWrapper.find('h3').exists()).toEqual(true);
    expect(subtitleWrapper.find('h3').text()).toEqual(props.subTitle);
  });

});
