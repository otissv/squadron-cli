import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import mapStateToProps from '../../mapStateToProps';


import {
  ROOT_ROUTE
} from '../../constants/routes-constants';
import {
SIGNIN_ROUTE,
SIGNOUT_ROUTE,
SIGNUP_ROUTE
} from '../../auth/route-auth';


const LoggedInNav = (props) => (
  <ul className='uk-navbar-nav'>
    <div className='uk-navbar-content'>{props.username}</div>
    <li><Link to={SIGNOUT_ROUTE}>Signout</Link></li>
  </ul>
);

const NotLoggedInNav = (props) => (
  <ul className='uk-navbar-nav'>
    <li><Link to={SIGNIN_ROUTE}>Signin</Link></li>
    <li><Link to={SIGNUP_ROUTE}>Signup</Link></li>
  </ul>
);


class Navigation extends React.Component {
  render () {
    return <nav className='uk-navbar'>
      <Link className='uk-navbar-brand' to={ROOT_ROUTE}>Loop</Link>
      <div className='uk-navbar-flip'>
        {this.props.appIsLoggedIn ? <LoggedInNav username={this.props.appStorage.username}/> : <NotLoggedInNav/>}
      </div>
    </nav>;
  }
}


Navigation.propTypes = {
  appIsLoggedIn: React.PropTypes.bool
};

export default connect(mapStateToProps)(Navigation);
