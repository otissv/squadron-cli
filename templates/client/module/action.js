import axios from 'axios';
import { query } from '../helpers/async-query';
import cleanObj from '../helpers/clean-object';
import isObjectEmpty from '../helpers/isObjectEmpty';
import { [[[lowerCaseName]]]FindAll } from './service-[[[lowerCaseName]]]';

import {
  arrayToObject,
  deleteKeyToArray
} from '../helpers';

import {
  REMOVE_[[[upperCaseName]]],
  REMOVE_[[[upperCaseName]]]_FROM_LIST,
  GET_[[[upperCaseName]]],
  GET_[[[upperCaseName]]]S,
  SELECT_[[[upperCaseName]]],
  SET_[[[upperCaseName]]],
  SET_[[[upperCaseName]]]S,
  UPDATE_[[[upperCaseName]]]
} from './constant-[[[lowerCaseName]]]';

import {
  API_ROUTE
} from '../constants/routes-constants';


function transformFormData (data) {
  return {
    ...cleanObj({
      ...data
    }),
    roles: data.roles.reduce((prev, curr) => [...prev, curr.value], [])
  };
}


export function create[[[capitalName]]] ({ id, token, [[[lowerCaseName]]] }) {
  console.log([[[lowerCaseName]]]);
  const request = query({
    url    : API_ROUTE,
    auth   : { id, token },
    actions: ['[[[lowerCaseName]]]Create'],
    query  :`mutation (
      $id       : String,
      $email    : String,
      $firstName: String,
      $lastName : String,
      $[[[lowerCaseName]]]name : String
    ) {
      [[[lowerCaseName]]]Create (
        id       : $id,
        email    : $email,
        firstName: $firstName,
        lastName : $lastName,
        [[[lowerCaseName]]]name : $[[[lowerCaseName]]]name
      )  {
        id
        created
        dateOfBirth
        email
        firstName
        lastLogin
        lastName
        telephone
        updated
        [[[lowerCaseName]]]name
      }
    }`,
    variables: JSON.stringify([[[lowerCaseName]]])
  });

  return {
    type: UPDATE_[[[upperCaseName]]],
    payload: request.then(response => response)
  };
}

export function remove[[[capitalName]]] ({ id, token, [[[lowerCaseName]]] }) {
  const request = axios.delete(`${API_ROUTE}[[[lowerCaseName]]]s/${[[[lowerCaseName]]]}/${query(id, token)}`);

  return {
    type: REMOVE_[[[upperCaseName]]],
    payload: request
  };
}


export function get[[[capitalName]]]s ({ id, token, filter }) {
  const request = [[[lowerCaseName]]]FindAll({ id, token, filter });

  return {
    type: GET_[[[upperCaseName]]]S,
    payload: request.then(response => response)
  };
}

export function set[[[capitalName]]]s ([[[lowerCaseName]]]s) {
  const [[[lowerCaseName]]]sList = arrayToObject([[[lowerCaseName]]]s);

  return {
    type: SET_[[[upperCaseName]]]S,
    payload: [[[lowerCaseName]]]sList('id', '[[[lowerCaseName]]]_')
  };
}


export function get[[[capitalName]]] ({ id, token, [[[lowerCaseName]]] }) {
  if (isObjectEmpty([[[lowerCaseName]]])) {
    return {
      type: 'do nothing',
      payload: Promise.resolve({
        data: { [[[lowerCaseName]]]FindById: {} }
      })
    };
  }


  const request = query({
    url    : API_ROUTE,
    auth   : { id, token },
    actions: ['[[[lowerCaseName]]]FindById'],
    query  :`query ($id: String) {
      [[[lowerCaseName]]]FindById (id: $id)  {
        id
        created
        dateOfBirth
        email
        firstName
        lastLogin
        lastName
        online
        roles
        telephone
        updated
        [[[lowerCaseName]]]name
        notes {
          id
          note
        }
        team {
          id
          name
        }
      }
    }`,
    variables: `{
      "id": "${[[[lowerCaseName]]].id}"
    }`
  });

  return {
    type: GET_[[[upperCaseName]]],
    payload: request.then(response => {
      return response;
    })
  };
}


export function remove[[[capitalName]]]FromList ({ list, keyName }) {
  const [[[lowerCaseName]]]List = arrayToObject(deleteKeyToArray(list, keyName));

  return {
    type: REMOVE_[[[upperCaseName]]]_FROM_LIST,
    payload: [[[lowerCaseName]]]List('id', '[[[lowerCaseName]]]_')
  };
}


export function select[[[capitalName]]] ([[[lowerCaseName]]]) {
  return {
    type: SELECT_[[[upperCaseName]]],
    payload: [[[lowerCaseName]]]
  };
}


export function set[[[capitalName]]] ([[[lowerCaseName]]]) {
  return {
    type: SET_[[[upperCaseName]]],
    payload: [[[lowerCaseName]]]
  };
}


export function update[[[capitalName]]] ({ id, token, [[[lowerCaseName]]] }) {
  const data = transformFormData([[[lowerCaseName]]]);

  const request = query({
    url    : API_ROUTE,
    auth   : { id, token },
    actions: ['[[[lowerCaseName]]]Update'],
    query  :`mutation (
      $id       : String,
      $email    : String,
      $firstName: String,
      $lastName : String,
      $roles    : [String],
      $[[[lowerCaseName]]]name : String
    ) {
      [[[lowerCaseName]]]Update (
        id       : $id,
        email    : $email,
        firstName: $firstName,
        lastName : $lastName,
        roles    : $roles,
        [[[lowerCaseName]]]name : $[[[lowerCaseName]]]name
      )  {
        id
        created
        dateOfBirth
        email
        firstName
        lastLogin
        lastName
        roles
        telephone
        updated
        [[[lowerCaseName]]]name
      }
    }`,
    variables: JSON.stringify(data)
  });

  return {
    type: UPDATE_[[[upperCaseName]]],
    payload: request.then(response => response)
  };
}
