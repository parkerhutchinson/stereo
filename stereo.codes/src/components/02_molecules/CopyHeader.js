import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class CopyHeader extends Component {
  componentWillMount() {
    this.setState({
      gridSpan: this.props.grid - 1,
    })
  }
  getSubHeader() {
    const markup = this.props.subTitle ?
    (<h3 className={`grid-col-${this.state.gridSpan}`}>{this.props.subTitle}</h3>) : null;
    return markup;
  }
  render() {
    return (
      <header
        className={`${this.props.classes} grid-${this.props.grid} copy-header grid-col-${this.props.grid}`}
      >
        <span className="grid-col-1"></span>
        <div className={`grid-col-${this.state.gridSpan}`} >
          <h2>{ this.props.title }</h2>
          { this.getSubHeader() }
        </div>
      </header>
    )
  }
}

CopyHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  classes: PropTypes.string,
  grid: PropTypes.number
}

CopyHeader.defaultProps = {
  title: '',
  classes: '',
  grid: 8,
}
