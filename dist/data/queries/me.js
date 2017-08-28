'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserType = require('../types/UserType');

var _UserType2 = _interopRequireDefault(_UserType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const me = {
  type: _UserType2.default,
  resolve({ request }) {
    return request.user && {
      id: request.user.id,
      email: request.user.email
    };
  }
};

exports.default = me;
//# sourceMappingURL=me.js.map