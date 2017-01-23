import React from 'react';
import { Link } from 'react-router';
import SharedButton from '../../shared/components/Button-shared';

const PageHeader = (props) => {
  const items = props.items.map(item => {
    return <li
      key={item.body.split(' ').join('_')}
      className='App-page-header-toolbar-link'
    >
      {item.href
        ? <Link to={item.href}>
            <SharedButton context='primary' onClick={item.onClick}>
              {item.body}
            </SharedButton>
          </Link>
        : <SharedButton context='primary' onClick={item.onClick}>
          {item.body}
        </SharedButton>
      }
    </li>;
  });

  return <div className='App-page-header'>
    <h1 className='App-page-header-heading'>{props.title}</h1>
    <ul className='App-page-header-toolbar'>
      {props.items ? items : null}
    </ul>
  </div>;
};

export default PageHeader;
