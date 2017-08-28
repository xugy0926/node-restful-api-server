'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserModel = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _logger = require('../common/logger');

var _logger2 = _interopRequireDefault(_logger);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = Promise;
_mongoose2.default.connect(_config.mongodbUrl, { server: { poolSize: 20 } });

const db = _mongoose2.default.connection;

db.on('error', err => {
  _logger2.default.error('connect to %s error: ', _config.mongodbUrl, err.message);
  process.exit(1);
});

db.once('open', () => {
  _logger2.default.info('connect to %s success', _config.mongodbUrl);
});

// models
require('./user');

var UserModel = exports.UserModel = _mongoose2.default.model('User');
//# sourceMappingURL=index.js.map