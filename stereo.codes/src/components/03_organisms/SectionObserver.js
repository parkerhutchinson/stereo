import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sectionAdd } from '../../actions/observer-actions';
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
