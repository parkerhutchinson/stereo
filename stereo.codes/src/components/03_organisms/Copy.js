import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CopyHeader from '../02_molecules/CopyHeader';

export default class Copy extends Component {
  render() {
    return (
      <section className="copy">
        <CopyHeader title={ this.props.title } subTitle={ this.props.subTitle }/>
        {this.props.children}
      </section>
    )
  }
}

Copy.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

Copy.defaultProps = {
  title: '',
}
