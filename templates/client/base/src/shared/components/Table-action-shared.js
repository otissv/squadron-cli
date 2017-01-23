import React from 'react';
import { Link } from 'react-router';
import Icons from 'react-uikit-icons';

const TableAction = ({ item, onClick, view, edit }) => (
  <td data-rowdata={item.id}>
    <Link
      onClick={onClick}
      to={`${view}/${item.id}`}
    >
      <Icons icon='eye' className='Table-action-icon'/>
    </Link>
    <Link
      onClick={onClick}
      to={`${edit}/${item.id}`}
    >
      <Icons icon='edit' className='Table-action-icon'/>
    </Link>
    <a><Icons icon='trash' className='Table-action-icon'/></a>
  </td>
);

export default TableAction;
