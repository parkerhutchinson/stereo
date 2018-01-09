import React from 'react';
import PropTypes from 'prop-types';
import './Logo.scss';

const Logo = (props) => (
    <h1 className={`${props.classes} grid-col-3 logo`}>
      <a href="#top">Stereo</a>
    </h1>
)

Logo.propTypes = {
  classes: PropTypes.string,
}

export default Logo;
