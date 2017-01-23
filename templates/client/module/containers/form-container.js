import React from 'react';
import autobind from 'class-autobind';
import { connect } from 'react-redux';
import mapStateToProps from '../../mapStateToProps';
import { reduxForm } from 'redux-form';
import actions from '../../actions';
import { [[[upperCaseName]]]S_ROUTE } from '../route-[[[lowerCaseName]]]';;
import getClassMethods from '../../helpers/get-class-methods';


function [[[capitalName]]]Form (Component, formName) {
  class ComposedClass extends React.Component {
    constructor () {
      super(...arguments);
      autobind(this);
    }


    componentDidMount () {
      const {
        initialize,
        [[[lowerCaseName]]]
      } = this.props;
      
      let data;

      if ([[[lowerCaseName]]].id) {
        data = [[[lowerCaseName]]];
      } else {
        data = {
          roles: [{
            value: '[[[lowerCaseName]]]',
            label: '[[[capitalName]]]'
          }]
        };
      }

      initialize && [[[lowerCaseName]]] && initialize(data);
    }


    handleEditSubmit ([[[lowerCaseName]]]) {
      const {
        appStorage,
        redirectTo,
        selected[[[capitalName]]],
        update[[[capitalName]]]
      } = this.props;

      const { id, token } = appStorage;

      if (this.props.anyTouched) {
        update[[[capitalName]]]({ id, token, [[[lowerCaseName]]] }).payload
          .then(response => {
            redirectTo(`/[[[lowerCaseName]]]s/${selected[[[capitalName]]].id}`);
          });
      } else {
        redirectTo(`/[[[lowerCaseName]]]s/${selected[[[capitalName]]].id}`);
      }
    }


    handleNewSubmit ([[[lowerCaseName]]]) {
      console.log('New[[[capitalName]]] onSubmit');
      const {
        appStorage,
        redirectTo,
        create[[[capitalName]]]
      } = this.props;

      const { id, token } = appStorage;

      create[[[capitalName]]]({ id, token, [[[lowerCaseName]]] }).payload
        .then(response => {
          redirectTo([[[upperCaseName]]]S_ROUTE);
        })
        .catch(error => {
          console.log(error);
        });
    }


    render () {
      return <Component {...getClassMethods(this)} />;
    }
  }


  function validate (values) {
    const errors = {};

    if (!values.email) {
      errors.email = 'Enter a email address';
    }

    if (!values.firstName) {
      errors.firstName = 'Enter a first name';
    }

    if (!values.lastName) {
      errors.lastName = 'Enter last name';
    }

    if (!values.roles) {
      errors.roles = 'Enter a role';
    }

    if (!values.[[[lowerCaseName]]]name) {
      errors.[[[lowerCaseName]]]name = 'Enter a [[[lowerCaseName]]]name';
    }

    return errors;
  }

  const rdxForm = reduxForm(
    {
      form: formName,
      validate
    },
    actions
  )(ComposedClass);

  function extendMapStateToProps (state) {
    return {
      ...mapStateToProps(state),
      forms : state.form
    };
  }

  return connect(extendMapStateToProps, actions)(rdxForm);
}

class [[[capitalName]]]FormContainer extends React.Component {
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

  render () {
    const {
      formName,
      component
    } = this.props;

    const Form = [[[capitalName]]]Form(component, formName);

    return <Form />;
  }
}

export default connect(mapStateToProps, actions)([[[capitalName]]]FormContainer);
