import React from 'react';
import Button from 'react-uikit-button';


const SharedButton = (props) => {
  const cleanProps = {
    ...props,
    row: null,
    control: null
  };

  return <Button {...cleanProps} className='u-depth-1'>
    {props.children}
  </Button>;
};

export default SharedButton;
