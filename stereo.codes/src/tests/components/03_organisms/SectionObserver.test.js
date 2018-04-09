import React from 'react'
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { MockProvider } from '../../../lib/MockProvider';
import SectionObserver from '../../../components/03_organisms/SectionObserver';
const IntersectionObserver = require('intersection-observer-polyfill/dist/IntersectionObserver');


describe('<SectionObserver />', () => {
  it('should mount', () => {
    const wrapper = mount(
      <MockProvider>
        <SectionObserver />
      </MockProvider>
    );
    expect(wrapper.exists()).toEqual(true);
  });
  // it('sets the class to inview when element scrolls into view', () => {
  //   let observerState = {
  //     inView: false,
  //   }
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       observerState.inView = true;
  //     });
  //   });
  //   const wrapper = mount(<SectionObserver />);
  //   observer.observe(wrapper.ref('sectionObserver'));
  //   expect(observerState.inView).toBe(true);
  // });
});
