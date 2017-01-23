import React from 'react';
import { Field } from 'redux-form';
import Form from 'react-uikit-form';
import FormReduxInput from '../../shared/components/form-redux-input';
import SharedButton from '../../shared/components/Button-shared';
import Box from '../../shared/components/Box-shared';
import Grid from 'react-uikit-grid';


const AuthForm = (props) => {
  const {
    heading,
    onSubmit
  } = props;

  return <Grid>
    <Box depth={1} center col='1-5'>
      <Form
        title={heading}
        layout='stacked'
        onSubmit={onSubmit}
      >
        <Field
          name="username"                   // Specify field name
          component={FormReduxInput}           // Specify render component above
          label='Username'
          type="text"
          help={{type: 'block'}}
        />
        <Field
          name="password"                   // Specify field name
          component={FormReduxInput}           // Specify render component above
          label='Password'
          type="password"
          help={{type: 'block'}}
        />
        <SharedButton type='submit' context='primary' margin='right top'>
          Submit
        </SharedButton>
      </Form>
    </Box>
  </Grid>;
};


AuthForm.propTypes = {
  heading       : React.PropTypes.string,
  handleSubmit  : React.PropTypes.func.isRequired,
  onSubmit      : React.PropTypes.func.isRequired
};

export default AuthForm;
