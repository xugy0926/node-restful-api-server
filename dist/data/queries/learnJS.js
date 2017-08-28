'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = require('graphql/type');

var _config = require('../../config');

var config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const courseInfo = {
  type: _type.GraphQLObjectType,
  resolve({ request }) {
    return {
      result: {
        code: 1,
        courseInfo: config.courseInfo
      }
    };
  }
};

exports.default = courseInfo;
//# sourceMappingURL=learnJS.js.map