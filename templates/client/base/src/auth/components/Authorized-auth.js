import React from 'react';

export default class Authorized extends React.Component {
  componentWillMount () {
    const { appIsLoggedIn, redirectTo, path } = this.props;

    if (!appIsLoggedIn) {
      const location = path || '/';

      redirectTo(location);
    }
  }

  render () {
    const ComposedClass = this.props.component;

    return <ComposedClass {...this.props}/>;
  }
}

Authorized.propTypes = {
  appIsLoggedIn: React.PropTypes.bool.isRequired,
  redirectTo: React.PropTypes.func.isRequired,
  component : React.PropTypes.element.isRequired,
  path      : React.PropTypes.string
};
