import React from 'react';
import [[[capitalName]]]Form from './Form-[[[lowerCaseName]]]';


const New[[[capitalName]]] = (props) => {
  const { handleSubmit, handleNewSubmit } = props;

  return <[[[capitalName]]]Form
    {...props}
    onSubmit={handleSubmit(handleNewSubmit)}
    heading='New [[[capitalName]]]'
  />;
};


New[[[capitalName]]].propTypes = {
  handleNewSubmit : React.PropTypes.func.isRequired,
  handleSubmit    : React.PropTypes.func.isRequired
};


export default New[[[capitalName]]];
