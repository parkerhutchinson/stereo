import React from 'react';
import PropTypes from 'prop-types';


const WorkFinderRow = (props) => (
  <dl className="row" onMouseOver={() => props.selected(props.name, props.id)}>
    <dd className="row-name">
      <dl>
        <dt>{props.date}</dt>
        <dd>{props.name}</dd>
      </dl>
    </dd>
    <dd className="row-stack">
      <dl>
        <dd>{props.stack}</dd>
      </dl>
    </dd>
    <dd className="row-position">
      <dl>
        <dd>{props.position}</dd>
      </dl>
    </dd>
  </dl>
)

WorkFinderRow.propTypes = {
  id: PropTypes.number,
  date: PropTypes.string,
  name: PropTypes.string,
  stack: PropTypes.array,
  position: PropTypes.string,
  selected: PropTypes.func,
}

WorkFinderRow.defaultProps = {
  id: 1,
  date: '2018',
  name: 'draftboard',
  stack: ['React', 'CSS3', 'HTML5'],
  position: 'Full Stack'
}

export default WorkFinderRow;
