import path from 'path';

let dev = typeof (__DEV__) !== 'undefined' ? __DEV__ : false; 
export const DEV = process.env.NODE_ENV !== 'production' || !dev ? true : false;
export const mongodbUrl = DEV ? 'mongodb://127.0.0.1:32768/learnJS' : 'mongodb://127.0.0.1:27017/learnJS';
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
export const wordsFilePath = path.join(__dirname, '/public/content/words');
export const rankingFilePath = path.join(__dirname, '/public/content/ranking');
export const homeworkPath = path.join(__dirname, '/public/content/homework/');
export const teamsInfoPath = path.join(__dirname, '/public/content/teams/');
