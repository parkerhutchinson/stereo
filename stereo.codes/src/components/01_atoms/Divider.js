import React from 'react';
import PropTypes from 'prop-types';


const Divider = (props) => (
  <div className="divider">
    <h5>{props.label}</h5>
  </div>
)

Divider.propTypes = {
  label: PropTypes.string.required,
}

Divider.defaultProps = {
  label: 'label',
}

export default Divider;
