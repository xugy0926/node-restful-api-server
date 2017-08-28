import path from 'path';

export const mongodbUrl = 'http://127.0.0.1:27017';
export const courseInfo = {
  title: 'JavaScript编程入门',
  teacher: '徐高阳',
  teacherAvatar:
    'https://ws1.sinaimg.cn/large/006tKfTcgy1fi7s7vo8y0j30hs0hsaay.jpg',
  startTime: '2017/08/08',
  endTime: '2017/09/10'
};

export const catelogFilePath = path.join(
  __dirname,
  '/public/content/catelog.json'
);
export const wordsFilePath = path.join(__dirname, '/public/content/words.json');
export const homeworkPath = path.join(__dirname, '/public/content/homework/');
