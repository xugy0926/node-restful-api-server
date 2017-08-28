'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeworkPath = exports.wordsFilePath = exports.catelogFilePath = exports.courseInfo = exports.mongodbUrl = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mongodbUrl = exports.mongodbUrl = 'http://127.0.0.1:27017';
const courseInfo = exports.courseInfo = {
  title: 'JavaScript编程入门',
  teacher: '徐高阳',
  teacherAvatar: 'https://ws1.sinaimg.cn/large/006tKfTcgy1fi7s7vo8y0j30hs0hsaay.jpg',
  startTime: '2017/08/08',
  endTime: '2017/09/10'
};

const catelogFilePath = exports.catelogFilePath = _path2.default.join(__dirname, '/public/content/catelog.json');
const wordsFilePath = exports.wordsFilePath = _path2.default.join(__dirname, '/public/content/words.json');
const homeworkPath = exports.homeworkPath = _path2.default.join(__dirname, '/public/content/homework/');
//# sourceMappingURL=config.js.map