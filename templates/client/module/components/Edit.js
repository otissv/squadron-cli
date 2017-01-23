import React from 'react';
import [[[capitalName]]]Form from './Form-[[[lowerCaseName]]]';

const Edit[[[capitalName]]] = (props) => {
  const { handleSubmit, handleEditSubmit } = props;
  return <[[[capitalName]]]Form
    {...props}
    onSubmit={handleSubmit(handleEditSubmit)}
    heading='Edit [[[capitalName]]]'
    />;
};


Edit[[[capitalName]]].propTypes = {
  handleSubmit     : React.PropTypes.func.isRequired,
  handleEditSubmit : React.PropTypes.func.isRequired
};


export default Edit[[[capitalName]]];
