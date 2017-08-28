'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = find;
exports.findOne = findOne;
exports.findFullOne = findFullOne;
exports.findByNames = findByNames;
exports.findOneById = findOneById;
exports.findOneDetailById = findOneDetailById;
exports.findOneByName = findOneByName;
exports.findByIds = findByIds;
exports.increaseScore = increaseScore;
exports.create = create;
exports.update = update;

var _nodeUuid = require('node-uuid');

var _nodeUuid2 = _interopRequireDefault(_nodeUuid);

var _ResultMsg = require('../constrants/ResultMsg');

var ResultMsg = _interopRequireWildcard(_ResultMsg);

var _models = require('../models');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const baseFields = 'name loginname email weixin qq avatar role is_star create_at';
const detailFields = 'name loginname weixin qq avatar accessToken role email url profile_image_url location signature profile is_star';
const authFields = 'name loginname email retrieveKey, retrieveTime';

function find(appId, conditions, options) {
  if (typeof appId !== 'string') throw new Error(ResultMsg.NO_APP_ID);
  if (typeof conditions !== 'object') throw new Error(ResultMsg.NOT_OBJECT);
  if (typeof options !== 'object') options = null;
  conditions.appId = appId;
  const query = _models.UserModel.find(conditions).select(baseFields).setOptions(options);
  return query.exec();
}

function findOne(appId, conditions, options) {
  if (typeof appId !== 'string') throw new Error(ResultMsg.NO_APP_ID);
  if (typeof conditions !== 'object') throw new Error(ResultMsg.NOT_OBJECT);
  if (typeof options !== 'object') options = null;
  conditions.appId = appId;
  const query = _models.UserModel.findOne(conditions).select(baseFields).setOptions(options);
  return query.exec();
}

function findFullOne(appId, conditions, options) {
  if (typeof appId !== 'string') throw new Error(ResultMsg.NO_APP_ID);
  if (typeof conditions !== 'object') throw new Error(ResultMsg.NOT_OBJECT);
  if (typeof options !== 'object') options = null;
  conditions.appId = appId;
  const query = _models.UserModel.findOne(conditions).setOptions(options);
  return query.exec();
}

function findByNames(appId, names) {
  if (typeof appId !== 'string') throw new Error(ResultMsg.NO_APP_ID);
  if (typeof names !== 'object') throw new Error(ResultMsg.NOT_OBJECT);
  if (!Array.isArray(names)) throw new Error(ResultMsg.NOT_ARRAY);
  const query = _models.UserModel.find({
    appId: appId,
    loginname: { $in: names }
  }).select(baseFields);
  return query.exec();
}

function findOneById(appId, id) {
  if (typeof appId !== 'string') throw new Error(ResultMsg.NO_APP_ID);
  if (typeof id !== 'string' && typeof id !== 'object') throw new Error(ResultMsg.NO_ID);
  const query = _models.UserModel.findOne({ appId: appId, _id: id }).select(baseFields);
  return query.exec();
}

function findOneDetailById(appId, id) {
  if (typeof appId !== 'string') throw new Error(ResultMsg.NO_APP_ID);
  if (typeof id !== 'string' && typeof id !== 'object') throw new Error(ResultMsg.NO_ID);
  const query = _models.UserModel.findOne({ appId: appId, _id: id }).select(detailFields);
  return query.exec();
}

function findOneByName(appId, name) {
  if (typeof appId !== 'string') throw new Error(ResultMsg.NO_APP_ID);
  if (typeof name !== 'string') throw new Error(ResultMsg.NOT_STRING);
  const query = _models.UserModel.findOne({
    appId: appId,
    loginname: new RegExp(`^${name}$`, 'i')
  }).select(baseFields);
  return query.exec();
}

function findByIds(appId, ids) {
  if (typeof appId !== 'string') throw new Error(ResultMsg.NO_APP_ID);
  if (typeof ids !== 'object') throw new Error(ResultMsg.NOT_OBJECT);
  if (!Array.isArray(ids)) throw new Error(ResultMsg.NOT_ARRAY);
  const query = _models.UserModel.find({ appId: appId, _id: { $in: ids } }).select(baseFields);
  return query.exec();
}

function increaseScore(appId, authorId, { topicCount, replyCount }) {
  if (typeof appId !== 'string') throw new Error(ResultMsg.NO_APP_ID);
  if (typeof authorId !== 'string' && typeof authorId !== 'object') throw new Error(ResultMsg.NO_ID);
  topicCount = !topicCount ? 0 : topicCount;
  replyCount = !replyCount ? 0 : replyCount;

  const data = {};
  if (topicCount != 0) {
    data.score = 5;
    data.topic_count = 1;
  }

  if (replyCount != 0) {
    data.score = 5;
    data.reply_count = 1;
  }

  const query = _models.UserModel.findByIdAndUpdate(authorId, { $inc: data });
  return query.exec();
}

function create(appId, { loginname, passwordHash, email, avatar, active }) {
  if (typeof appId !== 'string') throw new Error(ResultMsg.NO_APP_ID);
  if (typeof loginname !== 'string' || typeof passwordHash !== 'string' || typeof email !== 'string') {
    throw new Error(ResultMsg.NOT_STRING);
  }

  const user = new _models.UserModel();
  user.appId = appId;
  user.name = loginname;
  user.loginname = loginname;
  user.pass = passwordHash;
  user.email = email;
  user.avatar = avatar || '';
  user.active = active || false;
  user.accessToken = _nodeUuid2.default.v4();

  return user.save();
}

function update(appId, id, data) {
  if (typeof appId !== 'string') throw new Error(ResultMsg.NO_APP_ID);
  if (typeof id !== 'string' && typeof id !== 'object') throw new Error(ResultMsg.NO_ID);
  if (typeof data !== 'object') throw new Error(ResultMsg.NOT_OBJECT);
  const query = _models.UserModel.findByIdAndUpdate(id, { $set: data });
  return query.exec();
}
//# sourceMappingURL=user.js.map