import React from 'react'
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { MockProvider } from '../../../lib/MockProvider';
import SectionObserver from '../../../components/03_organisms/SectionObserver';
const IntersectionObserver = require('intersection-observer-polyfill/dist/IntersectionObserver');


describe('<SectionObserver />', () => {
  const observerProps = {
    classes: 'test',
    align: 'start',
    label: 'work',
    threshold: .5,
    nostate: true,
  }
  const wrapper = mount(
    <MockProvider>
      <SectionObserver {...observerProps}/>
    </MockProvider>
  );
  it('should mount', () => {
    expect(wrapper.find(SectionObserver).exists()).toEqual(true);
  });
  it('should have a custom class of test', () => {
    expect(wrapper.find(SectionObserver).props().classes).toEqual(observerProps.classes);
  });
  it('should have grid alignment start', () => {
    expect(wrapper.find(SectionObserver).props().align).toEqual(observerProps.align);
  });
  it('should have a label for state', () => {
    expect(wrapper.find(SectionObserver).props().label).toEqual(observerProps.label);
  });
  it('should have a threshold for the observer', () => {
    expect(wrapper.find(SectionObserver).props().threshold).toEqual(observerProps.threshold);
  });
  it('can have a no state option', () => {
    expect(wrapper.find(SectionObserver).props().nostate).toEqual(observerProps.nostate);
  })
});
