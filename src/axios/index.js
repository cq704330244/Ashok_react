import Jsonp from 'jsonp';

export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      Jsonp(
        options.url,
        {
          param: 'callback',
        },
        function (err, response) {
          if (response.status === 'success') {
            resolve(response.results);
          } else {
            reject(response.message);
            throw new Error(response.error);
          }
        }
      );
    });
  }
}
