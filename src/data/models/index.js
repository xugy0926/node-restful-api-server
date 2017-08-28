import mongoose from 'mongoose';
import logger from '../common/logger';
import { mongodbUrl } from '../config';

mongoose.Promise = Promise;
mongoose.connect(mongodbUrl, { server: { poolSize: 20 } });

const db = mongoose.connection;

db.on('error', err => {
  logger.error('connect to %s error: ', mongodbUrl, err.message);
  process.exit(1);
});

db.once('open', () => {
  logger.info('connect to %s success', mongodbUrl);
});

// models
require('./user');

export var UserModel = mongoose.model('User');
