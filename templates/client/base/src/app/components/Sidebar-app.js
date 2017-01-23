import React from 'react';
import { Link } from 'react-router';
import Nav from 'react-uikit-nav';
import NavItem from 'react-uikit-nav/lib/nav-item';


import holidayRoutes from '../../holiday/route-holiday';
import { USERS_ROUTE } from '../../user/route-user';

const {
  HOLIDAY_ALLOWANCES_ROUTE,
  HOLIDAY_CODEPENDENTS_ROUTE,
  HOLIDAYS_APPROVAL_ROUTE,
  HOLIDAYS_ROUTE,
  HOLIDAYS_STAFF_ROUTE
} = holidayRoutes;


class Sidebar extends React.Component {
  render () {
    return <Nav type='side'>
      <NavItem type='header' body='Admin'/>
      <li><Link to={'/roles'}>Permissions</Link></li>
      <li><Link to={USERS_ROUTE}>Users</Link></li>

      <NavItem type='header' body='Holidays'/>
      <li><Link to={HOLIDAYS_ROUTE}>My holidays</Link></li>
      <li><Link to={HOLIDAYS_STAFF_ROUTE}>Staff holidays</Link></li>
      <li><Link to={HOLIDAY_ALLOWANCES_ROUTE}>Allowances</Link></li>
      <li><Link to={HOLIDAY_CODEPENDENTS_ROUTE}>Codependents</Link></li>
      <li><Link to={HOLIDAYS_APPROVAL_ROUTE}>Approval</Link></li>
      <li><Link to={HOLIDAYS_ROUTE}>Calendar</Link></li>
    </Nav>;
  }
}

export default Sidebar;
