import axios from 'axios';
import { cleanObj } from 'ufunc';
import empty from 'is-empty';


// make ajax request to graphql server
export function query (args) {
  const {
    actions,
    auth,
    query,
    url,
    variables,
    filter
  } = args;
  
  axios.defaults.baseURL = url;
  axios.defaults.headers.common['Authorization'] = JSON.stringify(auth);
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

  const data = {
    actions,
    filter,
    query: `${query}`,
    variables
  };

  const axiosConfig = {
    url,
    method: 'POST'
  };

  return axios({ ...axiosConfig, data }).then(response => {
    const success = actions.reduce((prev, curr) => {
      return {
        ...prev,
        [curr]: response.data.data[curr] != null ? cleanObj(response.data.data[curr]) : null
      };
    }, {});

    const errors = empty(success)
    ? [
      { message: 'Request failed' },
      response.data.errors ? { ...response.data.errors } : null
    ]
    : response.data.errors;

    return {
      data: success,
      errors: errors
    };
  });
};
