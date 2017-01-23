import React from 'react';
import autobind from 'class-autobind';
import { connect } from 'react-redux';
import actions from '../../actions';
import mapStateToProps from '../../mapStateToProps';
import getClassMethods from '../../helpers/get-class-methods';


class [[[capitalName]]]sContainer extends React.Component {
  constructor () {
    super(...arguments);
    autobind(this);
  }


  componentWillMount () {
    this.handleGet[[[capitalName]]]();
  }


  handleSet[[[capitalName]]] (e) {
    const {
      select[[[capitalName]]],
      [[[lowerCaseName]]]sAll
    } = this.props;

    const rowdata = e.currentTarget.parentNode.dataset.rowdata;
    const key = `[[[lowerCaseName]]]_${rowdata}`;

    select[[[capitalName]]]([[[lowerCaseName]]]sAll[key]);
  }

  handleNewOnClick (e) {
    const {
      select[[[capitalName]]],
      set[[[capitalName]]]
    } = this.props;

    set[[[capitalName]]]({});
    select[[[capitalName]]]({});
  }


  handleGet[[[capitalName]]] (filter) {
    const {
      get[[[capitalName]]]s,
      set[[[capitalName]]]s,
      appStorage } = this.props;

    const { id, token } = appStorage;

    get[[[capitalName]]]s({ id, token, filter }).payload
      .then(response => {
        set[[[capitalName]]]s(response.data.[[[lowerCaseName]]]FindAll);
      });
  }


  handleFilterSubmit (filter) {
    this.handleGet[[[capitalName]]](filter);
  }


  render () {
    const Component = this.props.component;

    return <Component {...getClassMethods(this)} />;
  }
}


[[[capitalName]]]sContainer.propTypes = {
  get[[[capitalName]]]s: React.PropTypes.func.isRequired,
  set[[[capitalName]]]s: React.PropTypes.func.isRequired,
  appStorage : React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, actions)([[[capitalName]]]sContainer);
