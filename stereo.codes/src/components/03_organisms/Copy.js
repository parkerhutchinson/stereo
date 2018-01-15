import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CopyHeader from '../02_molecules/CopyHeader';

export default class Copy extends Component {
  render() {
    return (
      <section className={`${this.props.classes} copy grid-${this.props.grid} grid-col-${this.props.grid}`}>
        <CopyHeader
          title={ this.props.title }
          subTitle={ this.props.subTitle }
          className={`${this.props.classes}`}
          grid={this.props.grid}
        />
        <span className="grid-col-1"></span>
        <div className={`grid-col-${this.props.grid - 1}`}>
          {this.props.children}
        </div>
      </section>
    )
  }
}

Copy.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  grid: PropTypes.number,
  classes: PropTypes.string
}

Copy.defaultProps = {
  title: '',
  classes: '',
  grid: 8
}
