import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import Layout from './app/components/Layout-app';
import Home from './app/components/Home-app';


// Auth views
import AuthForm from './auth/containers/form-container-auth';
import Signup from './auth/components/Signup-auth';
import Signin from './auth/components/Signin-auth';
import Signout from './auth/components/Signout-auth';

import ListUsers from './user/views/List-user-view';
import ShowUser from './user/views/Show-user-view';
import EditUser from './user/views/Edit-user-view';
import NewUser from './user/views/New-user-view';

import Container from './shared/containers/container-shared';

import holidayViews from './holiday/view-holiday';

import {
  SIGNIN_ROUTE,
  SIGNOUT_ROUTE,
  SIGNUP_ROUTE
} from './auth/route-auth';

import holidayRoutes from './holiday/route-holiday';

import {
  USERS_ROUTE,
  USER_EDIT_ROUTE,
  USER_NEW_ROUTE
} from './user/route-user';

const {
  // Holiday route
  HOLIDAYS_APPROVAL_ROUTE,
  HOLIDAYS_ROUTE,
  HOLIDAYS_STAFF_ROUTE,
  HOLIDAY_EDIT_ROUTE,
  HOLIDAY_EDIT_STAFF_ROUTE,
  HOLIDAY_NEW_ROUTE,
  HOLIDAY_NEW_STAFF_ROUTE,
  // Holiday Allowance route
  HOLIDAY_ALLOWANCES_ROUTE,
  HOLIDAY_ALLOWANCE_EDIT_ROUTE,
  HOLIDAY_ALLOWANCE_NEW_ROUTE,
  // Holiday Codependent route
  HOLIDAY_CODEPENDENTS_ROUTE,
  HOLIDAY_CODEPENDENT_EDIT_ROUTE,
  HOLIDAY_CODEPENDENT_NEW_ROUTE
} = holidayRoutes;

const {
  // Holiday views
  EditHoliday,
  EditStaffHoliday,
  ListMyHolidays,
  ListStaff,
  NewHoliday,
  NewStaffHoliday,
  PendingHolidays,
  ShowHoliday,
  // Holiday Allowance views
  EditHolidayAllowance,
  ListHolidayAllowances,
  ShowHolidayAllowance,
  NewHolidayAllowance,
  // Holiday Codependent views
  EditHolidayCodependent,
  ListHolidayCodependents,
  NewHolidayCodependent,
  ShowHolidayCodependent
} = holidayViews;


const LayoutRoute = Container(Layout);
const HomeRoute = Container(Home);

const SignupRoute = AuthForm(Signup, 'SignupForm');
const SignoutRoute = Container(Signout);
const SigninRoute = AuthForm(Signin, 'SigninForm');


/* Place Show after routes with the same parent */
const routes = (store) => {
  return <Router path='/' component={LayoutRoute}>
    <IndexRoute component={HomeRoute} />
    <Route path={SIGNIN_ROUTE} component={SigninRoute} />
    <Route path={SIGNOUT_ROUTE} component={SignoutRoute} />
    <Route path={SIGNUP_ROUTE} component={SignupRoute} />

    <Route path={HOLIDAYS_STAFF_ROUTE} component={ListStaff} />
    <Route path={HOLIDAYS_ROUTE} component={ListMyHolidays} />
    <Route path={`${HOLIDAY_EDIT_ROUTE}/:id`} component={EditHoliday}/>
    <Route path={`${HOLIDAY_EDIT_STAFF_ROUTE}/:id`} component={EditStaffHoliday}/>
    <Route path={`${HOLIDAY_NEW_ROUTE}`} component={NewHoliday}/>
    <Route path={`${HOLIDAY_NEW_STAFF_ROUTE}`} component={NewStaffHoliday}/>
    <Route path={`${HOLIDAYS_APPROVAL_ROUTE}`} component={PendingHolidays}/>
    <Route path={`${HOLIDAYS_ROUTE}/:id`} component={ShowHoliday}/>

    <Route path={HOLIDAY_ALLOWANCES_ROUTE} component={ListHolidayAllowances} />
    <Route path={`${HOLIDAY_ALLOWANCE_EDIT_ROUTE}/:id`} component={EditHolidayAllowance}/>
    <Route path={`${HOLIDAY_ALLOWANCE_NEW_ROUTE}`} component={NewHolidayAllowance}/>
    <Route path={`${HOLIDAY_ALLOWANCES_ROUTE}/:id`} component={ShowHolidayAllowance}/>

    <Route path={HOLIDAY_CODEPENDENTS_ROUTE} component={ListHolidayCodependents} />
    <Route path={`${HOLIDAY_CODEPENDENT_EDIT_ROUTE}/:id`} component={EditHolidayCodependent}/>
    <Route path={`${HOLIDAY_CODEPENDENT_NEW_ROUTE}`} component={NewHolidayCodependent}/>
    <Route path={`${HOLIDAY_CODEPENDENTS_ROUTE}/:id`} component={ShowHolidayCodependent}/>


    <Route path={USERS_ROUTE} component={ListUsers} />
    <Route path={`${USERS_ROUTE}/:id`} component={ShowUser}/>
    <Route path={`${USER_EDIT_ROUTE}/:id`} component={EditUser}/>
    <Route path={`${USER_NEW_ROUTE}`} component={NewUser}/>
  </Router>;
};

export default routes;
