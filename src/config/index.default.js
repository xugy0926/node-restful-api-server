import path from 'path';

module.exports = {
  courseInfo: {
    title: 'JavaScript编程入门',
    teacher: '徐高阳',
    teacherAvatar:
      'https://ws1.sinaimg.cn/large/006tKfTcgy1fi7s7vo8y0j30hs0hsaay.jpg',
    startTime: '2017/08/08',
    endTime: '2017/09/14'
  },
  catelogFilePath: path.join(
    __dirname,
    '/public/content/catelog.json'
    ),
  wordsFilePath: path.join(__dirname, '/public/content/words'),
  rankingFilePath: path.join(__dirname, '/public/content/ranking'),
  homeworkPath: path.join(__dirname, '/public/content/homework/'),
  teamsInfoPath: path.join(__dirname, '/public/content/teams/')
}
