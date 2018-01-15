import React, { Component } from 'react';
import PropTypes from 'prop-types';
// have to use this otherwise it wont work in testing or other browsers
const IntersectionObserver = require('intersection-observer-polyfill/dist/IntersectionObserver');

export default class SectionObserver extends Component {
  componentWillMount() {
    const config = {
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('inview');
        } else {
          entry.target.classList.remove('inview');
        }
      })
    }, config);
  }

  componentDidMount() {
    this.observer.observe(this.refs.sectionObserver);
  }
  componentWillUnMount() {
    this.observer.unobserve(this.refs.sectionObserver);
  }
  render() {
    return (
      <section className={`${this.props.classes} observer`} ref="sectionObserver">
        { this.props.children }
      </section>
    );
  }
}

SectionObserver.propTypes = {
  classes: PropTypes.string,
}

SectionObserver.defaultProps = {
  classes: '',
}
