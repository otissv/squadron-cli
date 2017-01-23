import { query } from '../helpers/async-query';
import { API_ROUTE } from '../constants/routes-constants';
import { appStorage } from '../app/services-app';

const { 
  id, 
  token
} = appStorage();

export function [[[lowerCaseName]]]FindAll ({ filter } = {}) {
  return query({
    url    : API_ROUTE,
    auth   : { id, token },
    actions: ['[[[lowerCaseName]]]FindAll'],

    query  :`query {
      [[[lowerCaseName]]]FindAll {
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
      }
    }`
  });
}

export function [[[lowerCaseName]]]FindAllSummary ({ filter } = {}) {
  return query({
    url    : API_ROUTE,
    auth   : { id, token },
    actions: ['[[[lowerCaseName]]]FindAll'],

    query  :`query {
      [[[lowerCaseName]]]FindAll {
        id
        firstName
        lastName
        [[[lowerCaseName]]]name
      }
    }`
  });
}
