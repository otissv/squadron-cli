import React from 'react';
import Authorized from '../../auth/containers/authorized-container-auth';
import New[[[capitalName]]] from '../components/New-[[[lowerCaseName]]]';
import [[[capitalName]]]Form from '../containers/form-container-[[[lowerCaseName]]]';

const New[[[capitalName]]]Container = () => <[[[capitalName]]]Form component={New[[[capitalName]]]} formName='[[[capitalName]]]NewForm'/>

export default Authorized(New[[[capitalName]]]Container);
