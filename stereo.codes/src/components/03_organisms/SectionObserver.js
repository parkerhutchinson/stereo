import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sectionAdd } from '../../actions/observer-actions';
import { connect } from 'react-redux';
import { req } from 'request';

const IntersectionObserver = require('intersection-observer-polyfill/dist/IntersectionObserver');
// have to use this otherwise it wont work in testing or other browsers
//

const observerConfig = {
  threshold: [0, 0.25, 0.5, 0.75, 1.0],
}

class SectionObserver extends Component {
  componentWillMount() {
    this.observer = new IntersectionObserver((entries) => this.onChange(entries), observerConfig);
  }
  componentDidMount() {
    // safari sucks at support, but very good at render

    this.observer.observe(this.section);

    const isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

    if (isSafari) {
      this.props.sectionAdd('showall');
    }
  }
  componentWillUnMount() {
    this.observer.unobserve(this.section);
  }
  setSection = () => {
    this.props.sectionAdd(this.props.label);
  }
  onChange(entries) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > .75) {
        entry.target.classList.add('inview');
        this.setSection()
      } else {
        entry.target.classList.remove('inview');
      }
    })
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
  label: PropTypes.string,
  sectionAdd: PropTypes.func,
}

SectionObserver.defaultProps = {
  classes: '',
  align: 'start',
  label: 'none',
}

const mapDispatchToProps = (dispatch) => ({
  sectionAdd: (section) => {
    dispatch(sectionAdd(section))
  },
})

export default connect(
  null,
  mapDispatchToProps
)(SectionObserver);
