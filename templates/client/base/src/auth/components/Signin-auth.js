import React from 'react';
import AuthForm from './Form-auth';
import autobind from 'class-autobind';
import { HOLIDAYS_ROUTE } from '../../holiday/holiday/route-holiday';
import { SIGNUP_ROUTE } from '../route-auth';

export default class Signin extends React.Component {
  constructor () {
    super(...arguments);
    autobind(this);
  }

  handleSubmit (user) {
    const { authenticate, setStorage, loggedIn } = this.props;

    authenticate(user).payload
      .then(response => {
        const result = response.data.authenticate;

        if (response.errors) return Promise.reject(response.errors);

        this.props.redirectTo(HOLIDAYS_ROUTE);
        setStorage({ ...result });
        loggedIn(true);
      })
      .catch(errors => {
        this.props.redirectTo(SIGNUP_ROUTE);
        console.log(errors);
      });
  }


  render () {
    const { handleSubmit } = this.props;

    return <AuthForm
      onSubmit={handleSubmit(this.handleSubmit)}
      {...this.props}
      heading='Sign in'
      />;
  }
}


Signin.propTypes = {
  authenticate  : React.PropTypes.func,
  setStorage    : React.PropTypes.func,
  loggedIn      : React.PropTypes.func,
  redirectTo    : React.PropTypes.func,
  handleSubmit  : React.PropTypes.func
};
