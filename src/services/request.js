import axios from 'axios';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

export const request = (url, options = {}) => {
  const defaultOptions = {
    method: "GET",
    headers: defaultHeaders,
  }
  return axios({
    url,
    ...defaultOptions,
    ...options,
  }).then(({ data }) => data)
};