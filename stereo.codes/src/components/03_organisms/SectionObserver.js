import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// have to use this otherwise it wont work in testing or other browsers
const IntersectionObserver = require('intersection-observer-polyfill/dist/IntersectionObserver');

export default class SectionObserver extends Component {
  componentWillMount() {
    const config = {
      threshold: [0.5, 0.75],
    }
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > .75) {
          entry.target.classList.add('inview');
        } else {
          entry.target.classList.remove('inview');
        }
      })
    }, config);
  }

  componentDidMount() {
    this.observer.observe(this.section);
  }
  componentWillUnMount() {
    this.observer.unobserve(this.section);
  }
  render() {
    const StyledObserver = styled.section`
      align-items: ${this.props.align};
    `;
    return (
      <StyledObserver
        className={`${this.props.classes} observer`}
        ref="sectionObserver" innerRef={(comp) => { this.section = comp}}
      >
        { this.props.children }
      </StyledObserver>
    );
  }
}

SectionObserver.propTypes = {
  classes: PropTypes.string,
  align: PropTypes.string,
}

SectionObserver.defaultProps = {
  classes: '',
  align: 'start',
}
