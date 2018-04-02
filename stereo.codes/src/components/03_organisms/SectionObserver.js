import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sectionAdd } from '../../actions/observer-actions';
import { connect } from 'react-redux';

const IntersectionObserver = require('intersection-observer-polyfill/dist/IntersectionObserver');
// have to use this otherwise it wont work in testing or other browsers
//

// granularity here because we need to allow many options from props
const observerConfig = {
  threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
}

class SectionObserver extends Component {
  componentWillMount() {
    this.observer = new IntersectionObserver((entries) => this.onChange(entries), observerConfig);
  }
  componentDidMount() {
    this.observer.observe(this.section);
    // safari sucks at support, but very good at render
    const isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

    if (isSafari) {
      this.props.sectionAdd('showall');
    }
  }
  componentWillUnMount() {
    this.observer.unobserve(this.section);
  }
  setSection = (set) => {
    let tmp = {}
    tmp[this.props.label] = set;
    this.props.sectionAdd(tmp);
  }
  onChange(entries) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > this.props.threshold) {
        entry.target.classList.add('inview');
        if (!this.props.nostate) {
          this.setSection(true);
        }
      } else {
        entry.target.classList.remove('inview');
        this.setSection(false);
      }
    })
  }
  render() {
    const StyledObserver = styled.section`
      align-items: ${this.props.align};
      width: 100%;
      grid-column: 1 / span 24;
      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(18, 1fr);
        grid-column-start: 1;
        grid-column-end: 19;
      }
    `;
    return (
      <StyledObserver
        className={`${this.props.classes} observer grid-24`}
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
  threshold: PropTypes.number,
  nostate: PropTypes.bool,
}

SectionObserver.defaultProps = {
  classes: '',
  align: 'start',
  label: 'none',
  threshold: .5,
  nostate: false,
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
