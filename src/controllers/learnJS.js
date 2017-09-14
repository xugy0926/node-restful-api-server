import * as config from '../config';
import fs from 'fs';
import jsonfile from 'jsonfile';
import * as SayToMe from '../data/proxy/sayToMe';
import * as StudentWorks from '../data/proxy/studentWorks';
import MarkdownIt from 'markdown-it';
import { admin } from '../admin';

let md = new MarkdownIt({ breaks: true });

//TODO:
const phoneData = require('../user.phone_data');
const xsPhone = {};
for (const x of phoneData) {
  const key = Object.keys(x)[0];
  xsPhone[key] = x[key];
}

const emailData = require('../user.email_data');
const xsEmail = {};
for (const x of emailData) {
  const key = Object.keys(x)[0];
  xsEmail[key] = x[key];
}

let catelogContent = require('../public/content/catelog');

export function courseInfo(req, res) {
  res.json({
    code: 1,
    courseInfo: config.courseInfo
  });
}

export function catelog(req, res) {
  res.json({ code: 1, catelog: catelogContent });
}

export function updateCatelog(req, res) {
  var catelog = req.body.catelog;
  // TODO: 不用数据库，该如何对文章分类呢？
}

export function words(req, res) {
  const id = req.params.id;
  var filePath = config.wordsFilePath + '_' + id + '.json';

  jsonfile.readFile(filePath, function(err, words) {
    if (err) {
      res.json({ code: 0, message: '获取数据失败' });
      return;
    }

    res.json({ code: 1, words });
  });
}

export function updateWords(req, res) {
  const id = req.params.id;
  const words = req.body.words;
  var filePath = config.wordsFilePath + '_' + id + '.json';

  try {
    fs.unlinkSync(filePath);
  } catch (err) {
    // do nothing
  }

  jsonfile.writeFile(filePath, words, { spaces: 2 }, function(err) {
    if (err) {
      res.json({ code: 0, message: '更新失败' });
    } else {
      res.json({ code: 1, message: '更新成功' });
    }
  });
}

export function ranking(req, res) {
  const id = req.params.id;
  const filePath = config.rankingFilePath + '_' + id + '.json';

  jsonfile.readFile(filePath, function(err, ranking) {
    if (err) {
      res.json({ code: 0, message: '获取数据失败' });
      return;
    }

    res.json({ code: 1, ranking });
  });
}

export function updateRanking(req, res) {
  const id = req.params.id;
  const ranking = req.body.ranking;
  const filePath = config.rankingFilePath + '_' + id + '.json';

  try {
    fs.unlinkSync(filePath);
  } catch (err) {
    // do nothing
  }

  jsonfile.writeFile(filePath, ranking, { spaces: 2 }, function(err) {
    if (err) {
      res.json({ code: 0, message: '更新失败' });
    } else {
      res.json({ code: 1, message: '更新成功' });
    }
  });
}

export function homeworkInfo(req, res) {
  const id = req.params.id;

  fs.readdir(config.homeworkPath, function(err, files) {
    if (err) {
      res.json({ code: 0, message: '获取失败' });
    } else {
      var homeworkInfoList = [];
      files.forEach((item, index) => {
        let file = jsonfile.readFileSync(
          config.homeworkPath + 'lesson' + id + '_' + (index + 1) + '.json'
        );
        homeworkInfoList.push({
          url: 'homework/' + (index + 1),
          count: file.length
        });
      });

      res.json({ code: 1, homeworkInfo: homeworkInfoList });
    }
  });
}

export function homework(req, res) {
  const id = req.params.id;
  const number = req.params.number;
  const filePath = config.homeworkPath + '/lesson' + id + '_' + number + '.json';

  jsonfile.readFile(filePath, function(err, homeworks) {
    if (err) {
      res.json({ code: 0, message: '获取数据失败' });
    } else {
      res.json({ code: 1, homeworks });
    }
  });
}

export function updateHomework(req, res) {
  const id = req.params.id;
  const number = req.params.number;
  const filePath = config.homeworkPath + '/lesson' + id + '_' + number + '.json';
  const homeworkInfo = req.body.homeworkInfo;

  try {
    fs.unlinkSync(filePath);
  } catch (err) {
    // do nothing
  }

  jsonfile.writeFile(filePath, homeworkInfo, { spaces: 2 }, function(err) {
    if (err) {
      res.json({ code: 0, message: '更新失败' });
    } else {
      res.json({ code: 1, message: '更新成功' });
    }
  });
}

export function teams(req, res) {
  const id = req.params.id;
  const filePath = config.teamsInfoPath + id + '.md';

  fs.readFile(filePath, 'utf-8', function(err, teamInfo) {
    if (err) {
      res.json({ code: 0, message: '获取数据失败' });
    } else {
      res.json({ code: 1, teamInfo });
    }
  });
}

export function updateTeams(req, res) {
  const id = req.params.id;
  const teamInfo = req.body.teamInfo;
  const filePath = config.teamsInfoPath + id + '.md';

  try {
    fs.unlinkSync(filePath);
  } catch (err) {
    // do nothing
  }

  fs.writeFile(filePath, teamInfo, function(err) {
    if (err) {
      res.json({ code: 0, message: '更新失败' });
    } else {
      res.json({ code: 1, message: '更新成功' });
    }
  });
}

export async function sayToMe(req, res) {
  try {
    let data = await SayToMe.find();

    for (let i = 0; i < data.length; i++) {
      data[i].content = md.render(data[i].content);
    }

    res.json({ code: 1, data });
  } catch (err) {
    res.json({ code: 0, message: err.message });
  }
}

export async function addSayToMe(req, res) {
  const name = req.body.name || '';
  const account = req.body.account || '';
  const content = req.body.content || '';

  try {
    if (!account || !name || !content) {
      throw new Error('name or account or content is null');
    }

    if (!checkPermission(account)) {
      throw new Error('没有权限！' + account + ' 是你在新大注册的账号吗？');
    }

    let result = await SayToMe.findOne({ account });
    if (result) {
      result.content = content;
      result.name = name;
      let data = await result.save();
      data.content = md.render(data.content);
      res.json({ code: 1, data });
    } else {
      let data = await SayToMe.create(name, account, content);
      data.content = md.render(data.content);
      res.json({ code: 1, data });
    }
  } catch (err) {
    res.json({ code: 0, message: err.message });
  }
}

export async function updateSayToMe(req, res) {

}

export async function deleteSayToMe(req, res) {
  const id = req.body.id || '';
  const account = req.body.account || '';

  try {
    if (!checkPermission(account)) {
      throw new Error('没有权限！' + account + ' 是你在新大注册的账号吗？');
    }

    await SayToMe.update(id, { delete: true });
    res.json({ code: 1 });
  } catch (err) {
    res.json({ code: 0, message: err.message });
  }
}

export async function addCommentForSayToMe(req, res) {
  const id = req.body.id || '';
  const account = req.body.account || '';
  const comment = req.body.comment || '';

  try {
    if (account === admin) {
      throw new Error('没有权限！');
    }

    await SayToMe.update(id, { comment });
    res.json({ code: 1 });
  } catch (err) {
    res.json({ code: 0, message: err.message });
  }
}

function checkPermission(account) {
  let hasPermission = false;

  if (xsPhone[account] || config.DEV) {
    hasPermission = true;
  }

  if (xsEmail[account] || config.DEV) {
    hasPermission = true;
  }

  return hasPermission;
}

export async function studentWorks(req, res) {
  try {
    let data = await StudentWorks.find();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      data[i].description = md.render(data[i].description);
    }

    res.json({ code: 1, data });
  } catch (err) {
    res.json({ code: 0, message: err.message });
  }
}

export async function addStudentWork(req, res) {
  const name = req.body.name || '';
  const account = req.body.account || '';
  const url = req.body.url || '';
  const member = req.body.member || '';
  const description = req.body.description || '';

  console.log(req.body);

  try {
    if (!account || !name || !url) {
      throw new Error('name or account or url is null');
    }

    if (!checkPermission(account)) {
      throw new Error('没有权限！' + account + ' 是你在新大注册的账号吗？');
    }

    let result = await StudentWorks.findOne({ account });
    if (result) {
      result.name = name;
      result.url = url;
      result.member = member;
      result.description = description;
      let data = await result.save();
      data.description = md.render(data.description);
      res.json({ code: 1, data });
    } else {
      let data = await StudentWorks.create(
        name,
        account,
        url,
        member,
        description
      );
      data.description = md.render(data.description);
      res.json({ code: 1, data });
    }
  } catch (err) {
    res.json({ code: 0, message: err.message });
  }
}

export async function deleteStudentWork(req, res) {
  const account = req.body.account || '';

  try {
    if (!account) {
      throw new Error('name or account or description is null');
    }

    if (!checkPermission(account)) {
      throw new Error('没有权限！' + account + ' 是你在新大注册的账号吗？');
    }

    let result = await StudentWorks.findOne({ account });
    if (result) {
      result.delete = true;
      await result.save();
      res.json({ code: 1 });
    } else {
      throw new Error('删除无效，这不是你的数据吧？！');
    }
  } catch (err) {
    res.json({ code: 0, message: err.message });
  }
}
