const request = require('request-promise');

module.exports = bizName => {
  const url = `https://www.yelp.com/biz/${bizName}`;
  return request({ method: 'GET', url: url });
}
