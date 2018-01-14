import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class CopyHeader extends Component {
  getSubHeader() {
    const markup = this.props.subTitle ? `<h3>${this.props.subTitle}</h3>` : null;
    return markup;
  }
  render() {
    return (
      <header>
        <h2>{ this.props.title }</h2>
        { this.getSubHeader() }
      </header>
    )
  }
}

CopyHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

CopyHeader.defaultProps = {
  title: '',
}
