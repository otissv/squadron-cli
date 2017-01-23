import React from 'react';
import Show[[[capitalName]]] from '../components/Show-[[[lowerCaseName]]]';
import [[[capitalName]]]Container from '../containers/container-[[[lowerCaseName]]]';
import Authorized from '../../auth/containers/authorized-container-auth';


const Show[[[capitalName]]]View = () => <[[[capitalName]]]Container component={Show[[[capitalName]]]} />;

export default Authorized(Show[[[capitalName]]]View);
