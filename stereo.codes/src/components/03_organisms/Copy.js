import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CopyHeader from '../02_molecules/CopyHeader';

export default class Copy extends Component {
  render() {
    return (
      <section className="copy">
        <CopyHeader title={ this.props.title } />
      </section>
    )
  }
}

Copy.propTypes = {
  title: PropTypes.string.isRequired,
}

Copy.defaultProps = {
  title: '',
}
