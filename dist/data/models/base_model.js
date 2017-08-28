'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (schema) {
  schema.methods.create_at_ago = function () {
    return formatDate(this.create_at, true);
  };

  schema.methods.update_at_ago = function () {
    return formatDate(this.update_at, true);
  };
};

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatDate(date, friendly) {
  date = (0, _moment2.default)(date);

  if (friendly) {
    return date.fromNow();
  }
  return date.format('YYYY-MM-DD HH:mm');
}
//# sourceMappingURL=base_model.js.map