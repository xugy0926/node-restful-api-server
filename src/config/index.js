const config = require('./index.default');
const mongodbUrl = process.env.NODE_ENV !== 'production' ? require('./mongodb.dev') : require('./mongodb.pro');

console.log(config);
console.log(mongodbUrl);

module.exports = Object.assign({}, config, mongodbUrl);