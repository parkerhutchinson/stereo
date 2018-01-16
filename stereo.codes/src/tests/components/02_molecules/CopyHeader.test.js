import React from 'react';
import { shallow, mount } from 'enzyme';
import CopyHeader from '../../../components/02_molecules/CopyHeader';


describe('<CopyHeader />', () => {
  const props = {
    title: "hello world",
    subTitle: "hello sub world",
    grid: 10,
  }
  const wrapper = mount(<CopyHeader title={props.title} grid={props.grid}/>);

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

  it('accepts custom classes', () => {
    const customClasses = mount(<CopyHeader title={props.title} classes="hello world" />);
    expect(customClasses.find('header').hasClass('hello')).toEqual(true);
    expect(customClasses.find('header').hasClass('world')).toEqual(true);
  });

  it('sets custom classes based on grid props', () => {
    expect(wrapper.props().grid).toBe(10);
    expect(wrapper.find('span').hasClass('grid-col-1')).toEqual(true);
    expect(wrapper.find('div').hasClass(`grid-col-${props.grid - 1}`)).toEqual(true);
  });

});
