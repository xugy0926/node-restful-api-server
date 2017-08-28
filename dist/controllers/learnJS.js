'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.courseInfo = courseInfo;
exports.catelog = catelog;
exports.updateCatelog = updateCatelog;
exports.words = words;
exports.updateWords = updateWords;
exports.homeworkInfo = homeworkInfo;
exports.homework = homework;
exports.updateHomework = updateHomework;

var _config = require('../config');

var config = _interopRequireWildcard(_config);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _jsonfile = require('jsonfile');

var _jsonfile2 = _interopRequireDefault(_jsonfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

let catelogContent = require('../public/content/catelog');

function courseInfo(req, res) {
  res.json({
    result: {
      code: 1,
      courseInfo: config.courseInfo
    }
  });
}

function catelog(req, res) {
  res.json({ result: { code: 1, catelog: catelogContent } });
}

function updateCatelog(req, res) {
  var catelog = req.body.catelog;
  // TODO: 不用数据库，该如何对文章分类呢？
}

function words(req, res) {
  _jsonfile2.default.readFile(config.wordsFilePath, function (err, words) {
    if (err) {
      res.json({ result: { code: 0, message: '获取数据失败' } });
      return;
    }

    res.json({ result: { code: 1, words } });
  });
}

function updateWords(req, res) {
  const words = req.body.words;

  _fs2.default.unlinkSync(config.wordsFilePath);

  _jsonfile2.default.writeFile(config.wordsFilePath, words, { spaces: 2 }, function (err) {
    if (err) {
      res.json({ result: { code: 0, message: '更新失败' } });
    } else {
      res.json({ result: { code: 1, message: '更新成功' } });
    }
  });
}

function homeworkInfo(req, res) {
  _fs2.default.readdir(config.homeworkPath, function (err, files) {
    console.log(files);
    if (err) {
      res.json({ result: { code: 0, message: '获取失败' } });
    } else {
      var homeworkInfoList = [];
      files.forEach((item, index) => {
        let file = _jsonfile2.default.readFileSync(config.homeworkPath + 'lesson' + (index + 1) + '.json');
        homeworkInfoList.push({
          url: 'homework/' + (index + 1),
          count: file.length
        });
      });

      res.json({ result: { code: 1, homeworkInfo: homeworkInfoList } });
    }
  });
}

function homework(req, res) {
  const id = req.params.id;
  var filePath = config.homeworkPath + '/lesson' + id + '.json';

  _jsonfile2.default.readFile(filePath, function (err, homeworks) {
    if (err) {
      res.json({ result: { code: 0, message: '获取数据失败' } });
    } else {
      res.json({ result: { code: 1, homeworks } });
    }
  });
}

function updateHomework(req, res, next) {
  // TODO:
}
//# sourceMappingURL=learnJS.js.map