import React from 'react';
import '../css/style-shared.css';
import uikit from 'react-uikit-base';

const Box = (props) => {
  const depth = props.depth ? `Shared-box u-depth-${props.depth}` : '';

  const className = props.className ? props.className : '';

  return <div className={`${depth} ${className}`}>
    {props.children}
  </div>;
};

export default uikit.base(Box);
