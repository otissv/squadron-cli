import React from 'react';
import Authorized from '../../auth/containers/authorized-container-auth';
import Edit[[[capitalName]]] from '../components/Edit-[[[lowerCaseName]]]';
import [[[capitalName]]]Form from '../containers/form-container-[[[lowerCaseName]]]';

const Edit[[[capitalName]]]View = () => <[[[capitalName]]]Form component={Edit[[[capitalName]]]} formName='[[[capitalName]]]EditForm' />;

export default Authorized(Edit[[[capitalName]]]View);
