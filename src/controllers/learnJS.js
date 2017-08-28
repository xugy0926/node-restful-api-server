import * as config from '../config';
import fs from 'fs';
import jsonfile from 'jsonfile';

let catelogContent = require('../public/content/catelog');

export function courseInfo(req, res) {
  res.json({
    result: {
      code: 1,
      courseInfo: config.courseInfo
    }
  });
}

export function catelog(req, res) {
  res.json({ result: { code: 1, catelog: catelogContent } });
}

export function updateCatelog(req, res) {
  var catelog = req.body.catelog;
  // TODO: 不用数据库，该如何对文章分类呢？
}

export function words(req, res) {
  jsonfile.readFile(config.wordsFilePath, function(err, words) {
    if (err) {
      res.json({ result: { code: 0, message: '获取数据失败' } });
      return;
    }

    res.json({ result: { code: 1, words } });
  });
}

export function updateWords(req, res) {
  const words = req.body.words;

  fs.unlinkSync(config.wordsFilePath);

  jsonfile.writeFile(config.wordsFilePath, words, { spaces: 2 }, function(err) {
    if (err) {
      res.json({ result: { code: 0, message: '更新失败' } });
    } else {
      res.json({ result: { code: 1, message: '更新成功' } });
    }
  });
}

export function homeworkInfo(req, res) {
  fs.readdir(config.homeworkPath, function(err, files) {
    console.log(files);
    if (err) {
      res.json({ result: { code: 0, message: '获取失败' } });
    } else {
      var homeworkInfoList = [];
      files.forEach((item, index) => {
        let file = jsonfile.readFileSync(
          config.homeworkPath + 'lesson' + (index + 1) + '.json'
        );
        homeworkInfoList.push({
          url: 'homework/' + (index + 1),
          count: file.length
        });
      });

      res.json({ result: { code: 1, homeworkInfo: homeworkInfoList } });
    }
  });
}

export function homework(req, res) {
  const id = req.params.id;
  var filePath = config.homeworkPath + '/lesson' + id + '.json';

  jsonfile.readFile(filePath, function(err, homeworks) {
    if (err) {
      res.json({ result: { code: 0, message: '获取数据失败' } });
    } else {
      res.json({ result: { code: 1, homeworks } });
    }
  });
}

export function updateHomework(req, res, next) {
  // TODO:
}
