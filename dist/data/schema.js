'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _learnJS = require('./queries/learnJS');

var _learnJS2 = _interopRequireDefault(_learnJS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = new _graphql.GraphQLSchema({
  query: new _graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      learnJS: _learnJS2.default
    }
  })
});

exports.default = schema;
//# sourceMappingURL=schema.js.map