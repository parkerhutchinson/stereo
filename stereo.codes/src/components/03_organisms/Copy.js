import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CopyHeader from '../02_molecules/CopyHeader';

export default class Copy extends Component {
  render() {
    const { grid, classes, subTitle, title } = this.props;
    const gridPad = grid - 1;
    const gridContent = grid - 2;
    return (
      <article className={`${classes} grid-col-${grid} copy`}>
        <div className={`grid-col-${grid} copy-wrap`}>
          <CopyHeader
            title={ title }
            subTitle={ subTitle }
            className={`${classes}`}
            grid={grid}
          />
          <div className="copy-content">
            {this.props.children}
          </div>
        </div>
        <span className={`grid-col-${gridContent} bg`}></span>
      </article>
    )
  }
}

Copy.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  grid: PropTypes.number,
  classes: PropTypes.string,
}

Copy.defaultProps = {
  title: '',
  classes: '',
  grid: 8,
}
