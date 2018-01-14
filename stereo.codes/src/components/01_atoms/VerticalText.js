import React from 'react';

const VerticalText = (props) => (
  <aside className="vertical-text grid-col-2">
    <div className="vertical-text-wrap">
      { props.children }
    </div>
  </aside>
)

export default VerticalText;
