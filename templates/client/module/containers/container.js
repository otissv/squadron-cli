import React from 'react';
import autobind from 'class-autobind';
import { connect } from 'react-redux';
import actions from '../../actions';
import mapStateToProps from '../../mapStateToProps';
import Delete[[[capitalName]]] from '../components/Delete-[[[lowerCaseName]]]';
import getClassMethods from '../../helpers/get-class-methods';


class [[[capitalName]]]Container extends React.Component {
  constructor () {
    super(...arguments);
    autobind(this);
  }


  componentWillMount () {
    const {
      get[[[capitalName]]],
      selected[[[capitalName]]],
      set[[[capitalName]]],
      appStorage } = this.props;

    const { id, token } = appStorage;

    get[[[capitalName]]]({ id, token, [[[lowerCaseName]]]: selected[[[capitalName]]] }).payload
      .then(response => {
        set[[[capitalName]]](response.data.[[[lowerCaseName]]]FindById);
      });
  }


  handleDelete (e) {
    Delete[[[capitalName]]](this.props);
  }


  render () {
    const Component = this.props.component;

    return <Component {...getClassMethods(this)} />;
  }
}

[[[capitalName]]]Container.propTypes = {
  get[[[capitalName]]]     : React.PropTypes.func.isRequired,
  selected[[[capitalName]]]: React.PropTypes.object.isRequired,
  set[[[capitalName]]]     : React.PropTypes.func.isRequired,
  appStorage  : React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, actions)([[[capitalName]]]Container);
