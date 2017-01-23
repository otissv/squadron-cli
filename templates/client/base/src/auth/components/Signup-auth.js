import React from 'react';
import AuthForm from './Form-auth';
import autobind from 'class-autobind';

export default class Signup extends React.Component {
  constructor () {
    super(...arguments);
    autobind(this);
  }

  handleSubmit (props) {
    const { register, setStorage, loggedIn } = this.props;

    register(props).payload
      .then(response => {
        const result = response.data.register;

        if (response.errors) return Promise.reject(response.errors);

        this.props.redirectTo('/');
        setStorage(result);
        loggedIn(true);
      })
      .catch(errors => {
        this.props.redirectTo('/signup');
        console.log(errors);
      });
  }


  render () {
    const { handleSubmit } = this.props;

    return <AuthForm
      onSubmit={handleSubmit(this.handleSubmit)}
      {...this.props}
      heading='Sign up'
      />;
  }
}


Signup.propTypes = {
  loggedIn      : React.PropTypes.func.isRequired,
  handleSubmit  : React.PropTypes.func.isRequired,
  register      : React.PropTypes.func.isRequired,
  redirectTo    : React.PropTypes.func.isRequired,
  setStorage    : React.PropTypes.func.isRequired
};
