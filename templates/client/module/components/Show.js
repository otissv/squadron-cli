import React from 'react';
import Box from '../../shared/components/Box-shared';
import PageHeader from '../../shared/components/Page-header-shared';
import Notes from '../../shared/components/Notes-shared';
import Row from '../../shared/components/Row-shared';
import titleize from '../../helpers/titleize';
import {
  [[[upperCaseName]]]S_ROUTE,
  [[[upperCaseName]]]_EDIT_ROUTE
} from '../route-[[[lowerCaseName]]]';


const Show[[[capitalName]]] = (props) => {
  const { [[[lowerCaseName]]], selected[[[capitalName]]], handleDelete } = props;

  const notes = <Notes
    items={[[[lowerCaseName]]].notes}
  />;

  return <div>
    <PageHeader
      title='[[[capitalName]]] Profile'
      items={[
        {
          body: 'Back',
          href: [[[upperCaseName]]]S_ROUTE
        },
        {
          body: 'Edit',
          href: `${[[[upperCaseName]]]_EDIT_ROUTE}/${selected[[[capitalName]]].id}`
        },
        {
          body: 'Delete',
          onClick: handleDelete
        }
      ]}
    />


    <Box depth={1}>
      <Row
        label='First Name'
        value={[[[lowerCaseName]]].firstName}
        titleize
        />
      <Row
        label='Last Name'
        value={[[[lowerCaseName]]].lastName}
        titleize
        />
      <Row
        label='[[[capitalName]]]name'
        value={[[[lowerCaseName]]].[[[lowerCaseName]]]name}
        />
      <Row
        label='Email'
        value={[[[lowerCaseName]]].email}
        titleize
        />
      <Row
        label='Phone Number'
        value={[[[lowerCaseName]]].telephone}
        titleize
        />
      <Row
        label='Roles'
        value={[[[lowerCaseName]]].roles && [[[lowerCaseName]]].roles.map(r => titleize(r)).join(', ')}
      />

      {/* Address1: {[[[lowerCaseName]]].address ? [[[lowerCaseName]]].address.address1 : ''} <br />
      Address2: {[[[lowerCaseName]]].address ? [[[lowerCaseName]]].address.address2: ''}<br />
      City: {[[[lowerCaseName]]].address ? [[[lowerCaseName]]].address.city : ''}<br />
      State: {[[[lowerCaseName]]].address ? [[[lowerCaseName]]].address.state : ''}<br />
      Postcode: {[[[lowerCaseName]]].address ? [[[lowerCaseName]]].address.postCode : ''}<br /> */}
    </Box>

    {notes}
  </div>;
};


Show[[[capitalName]]].propTypes = {
  [[[lowerCaseName]]]        : React.PropTypes.object.isRequired,
  selected[[[capitalName]]]: React.PropTypes.object.isRequired
};


export default Show[[[capitalName]]];
