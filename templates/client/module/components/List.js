import React from 'react';
import { objectToArray } from '../../helpers';
import Table from 'react-uikit-table';
import TableAction from '.././../shared/components/Table-action-shared';
import Box from '../../shared/components/Box-shared';
import PageHeader from '../../shared/components/Page-header-shared';
import FilterForm from '../../shared/components/Filter-shared';
import titleize from '../../helpers/titleize';
import {
  [[[upperCaseName]]]S_ROUTE,
  [[[upperCaseName]]]_EDIT_ROUTE,
  [[[upperCaseName]]]_NEW_ROUTE
} from '../route-[[[lowerCaseName]]]';


const List[[[capitalName]]]s = (props) => {
  const {
    handleFilterSubmit,
    handleNewOnClick,
    handleSet[[[capitalName]]],
    [[[lowerCaseName]]]sAll
  } = props;

  const items = objectToArray([[[lowerCaseName]]]sAll).map(item => {
    return <tr key={item.id}>
      <td>{item.[[[lowerCaseName]]]name}</td>
      <td>{titleize(item.firstName)} {titleize(item.lastName)}</td>
      <td>{item.email}</td>
      <td>{item.online ? 'Online' : '-'}</td>
      <td>{item.telephone}</td>

      <TableAction
        onClick={handleSet[[[capitalName]]]}
        item={item}
        view={[[[upperCaseName]]]S_ROUTE}
        edit={[[[upperCaseName]]]_EDIT_ROUTE}
      />
    </tr>;
  });


  return <div>
    <PageHeader
      title='[[[capitalName]]]s'
      items={[{
        body: 'New [[[capitalName]]]',
        href: [[[upperCaseName]]]_NEW_ROUTE,
        onClick: handleNewOnClick
      }]}
    />

    <Box depth={1}>
      {/*<FilterForm
        onSubmit={handleFilterSubmit}
        formName='[[[lowerCaseName]]]sFilterForm'
        table='[[[lowerCaseName]]]s'
        items={[
          { label: '[[[capitalName]]]name', name: '[[[lowerCaseName]]].[[[lowerCaseName]]]name' },
          { label: 'Name', name: '[[[lowerCaseName]]].name' },
          { label: 'Email', name: '[[[lowerCaseName]]].email' },
          { label: 'Telephone', name: '[[[lowerCaseName]]].telephone' },
          { label: 'Online', name: '[[[lowerCaseName]]].online', type: 'checkbox' }
        ]}
      />*/}
      <Table
        className='App-table'
        caption='[[[capitalName]]]s Table'
        striped
        hover
        head={[
          '[[[capitalName]]]name',
          'Name',
          'Email',
          'Online',
          'Telephone',
          'Actions'
        ]}
      >
        <tbody>{items}</tbody>
      </Table>
    </Box>
  </div>;
};


List[[[capitalName]]]s.propTypes = {
  [[[lowerCaseName]]]sAll  : React.PropTypes.object.isRequired,
  select[[[capitalName]]]: React.PropTypes.func.isRequired
};

export default List[[[capitalName]]]s;
