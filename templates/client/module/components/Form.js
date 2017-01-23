import React from 'react';
import { Link } from 'react-router';
import { Field } from 'redux-form';
import Form from 'react-uikit-form';
import SelectInput from '../../shared/components/Select-input';
import FormReduxInput from '../../shared/components/form-redux-input';
import SharedButton from '../../shared/components/Button-shared';
import Box from '../../shared/components/Box-shared';
import { [[[upperCaseName]]]S_ROUTE } from '../route-[[[lowerCaseName]]]';


const [[[capitalName]]]Form = (props) => {
  const {
    forms,
    heading,
    onSubmit
  } = props;

  const disabled = forms.SigninForm && !forms.SigninForm.anyTouched;
  return <Box depth={1}>
  <Form
    title={heading}
    layout='stacked'
    onSubmit={onSubmit}
  >

    <Field
      name='[[[lowerCaseName]]]name'
      component={FormReduxInput}
      label='[[[capitalName]]]name'
      type='text'
      help={{type: 'block'}}
    />

    <Field
      name='email'
      component={FormReduxInput}
      label='Email'
      type='email'
      help={{type: 'block'}}
    />

    <Field
      name='firstName'
      component={FormReduxInput}
      label='First Name'
      type='text'
      help={{type: 'block'}}
    />

    <Field
      name='lastName'
      component={FormReduxInput}
      label='Last Name'
      type='text'
      help={{type: 'block'}}
    />

    <Field
      name='dateOfBirth'
      component={FormReduxInput}
      label='Date of Birth'
      icon='calendar'
      type='date'
      help={{type: 'block'}}
    />

    <Field
      name='telephone'
      component={FormReduxInput}
      label='Phone Number'
      type='tel'
      help={{type: 'block'}}
    />

    <Field
      name="roles"
      label='Roles'
      multi={true}
      options={[
        { label: 'Admin', value: 'admin' },
        { label: 'Manager', value: 'manager' },
        { label: '[[[capitalName]]]', value: '[[[lowerCaseName]]]' }
      ]}
      component={SelectInput}
    />

    <SharedButton 
      type='submit' 
      context='primary' 
      margin='right top'
      disabled={disabled}
    >
      Save
    </SharedButton>


    <SharedButton margin='top'>
      <Link to={`${[[[upperCaseName]]]S_ROUTE}`}>
        Cancel
      </Link>
    </SharedButton>
  </Form>
  </Box>;
};


[[[capitalName]]]Form.propTypes = {
  heading      : React.PropTypes.string.isRequired,
  onSubmit     : React.PropTypes.func.isRequired
};

export default [[[capitalName]]]Form;
