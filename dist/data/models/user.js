'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _base_model = require('./base_model');

var _base_model2 = _interopRequireDefault(_base_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose2.default.Schema;

const UserSchema = new Schema({
  appId: { type: String, requried: true },
  name: { type: String },
  loginname: { type: String, required: true },
  pass: { type: String, required: true },
  email: { type: String },
  url: { type: String },
  profile_image_url: { type: String },
  location: { type: String },
  signature: { type: String },
  profile: { type: String },
  weixin: { type: String },
  qq: { type: String },
  weibo: { type: String },
  avatar: { type: String },
  githubId: { type: String },
  githubUsername: { type: String },
  githubAccessToken: { type: String },
  active: { type: Boolean, default: false },
  receive_reply_mail: { type: Boolean, default: false },
  receive_at_mail: { type: Boolean, default: false },
  retrieveTime: { type: Number },
  retrieveKey: { type: String },
  accessToken: { type: String },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
});

UserSchema.plugin(_base_model2.default);
_mongoose2.default.model('User', UserSchema);
//# sourceMappingURL=user.js.map