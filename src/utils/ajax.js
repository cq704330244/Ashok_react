import axios from 'axios';

const baseUrl = '';

const http = {
  post: (url, body, options) =>
    axios
      .post(baseUrl + url, body)
      .then(res => {
        return handleSuccess(res);
      })
      .catch(err => {
        return handleError(err);
      }),
  get: (url, params) =>
    axios
      .get(baseUrl + url, {
        ...params,
        params,
      })
      .then(res => {
        return handleSuccess(res);
      })
      .catch(err => {
        return handleError(err);
      }),
};

const handleSuccess = ({ data, config }) => {
  //   if (!data.webResult.success) {
  //     return Promise.reject(data);
  //   }
  return data;
};

const handleError = err => {
  return Promise.reject(err);
};

export default http;
