import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { setSection } from '../../actions/observer-actions';
import { connect } from 'react-redux';

// have to use this otherwise it wont work in testing or other browsers
const IntersectionObserver = require('intersection-observer-polyfill/dist/IntersectionObserver');

const observerConfig = {
  threshold: [0.5, 0.75],
}

class SectionObserver extends Component {
  componentWillMount() {
    this.observer = new IntersectionObserver((entries) => this.onChange(entries), observerConfig);
  }
  componentDidMount() {
    this.observer.observe(this.section);
  }
  componentWillUnMount() {
    this.observer.unobserve(this.section);
  }
  onChange(entries) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > .75) {
        entry.target.classList.add('inview');
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
  setSection: PropTypes.func,
  section: PropTypes.string,
}

SectionObserver.defaultProps = {
  classes: '',
  align: 'start',
  label: 'none',
}

const mapDispatchToProps = (dispatch) => ({
  setSection: (section) => {
    dispatch(setSection(section))
  },
})

const mapStateToProps = (state) => {
  return {
    section: state.currentSection.section
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SectionObserver)
