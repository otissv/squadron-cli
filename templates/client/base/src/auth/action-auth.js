import { query } from '../helpers/async-query.js';


import {
  AUTHENTICATE,
  REGISTER,
  UNAUTHENTICATE
} from './constant-auth';


import {
  AUTH_ROUTE
} from '../constants/routes-constants';

export function authenticate (user) {

  const request = query({
    url   : AUTH_ROUTE,
    actions: ['authenticate'],
    query : `query ($username: String, $password: String) {
      authenticate (username: $username, password: $password) {
        id
        roles
        token
        username
      }
    }`,
    variables: JSON.stringify(user)
  });

  return {
    type: AUTHENTICATE,
    payload: request.then(response => response)
  };
}


export function register (user) {
  const request = query({
    url   : AUTH_ROUTE,
    actions: ['register'],
    query : `mutation register ($username: String, $password: String) {
      register (username: $username,password: $password) {
        id
        roles
        token
        username
      }
    }`,
    variables: JSON.stringify(user)
  });


  return {
    type: REGISTER,
    payload: request.then(response => response)
  };
}


export function unauthenticate (id) {
  const request = query({
    url   : AUTH_ROUTE,
    actions: ['unauthenticate'],
    query : `mutation unauthenticate (
      $id: String
    ) {
      register (
        id: "$id}",
      ) {
        token
      }
    }`,
    variables: {
      "id": `${id}`
    }
  }
);
  return {
    type: UNAUTHENTICATE,
    payload: request
  };
}
