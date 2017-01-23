import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import mapStateToProps from '../../mapStateToProps';

export default function (ComposedClass, redirect) {

  class Authorized extends React.Component {
    constructor (props) {
      super(props);
      this.ComponentClass = props.appIsLoggedIn ? <ComposedClass {...this.props}/> : <div/>;
    }

    componentWillMount () {
      const { appIsLoggedIn, redirectTo } = this.props;

      if (!appIsLoggedIn) {
        const path = redirect || '/';
        redirectTo(path);
      }
    }

    render () {
      return this.ComponentClass;
    }
  }

  Authorized.propTypes = {
    appIsLoggedIn: React.PropTypes.bool,
    redirectTo: React.PropTypes.func.isRequired
  };

  return connect(mapStateToProps, actions)(Authorized);
}
