import mongoose from 'mongoose';
import { mongodbUrl } from '../../config';

mongoose.Promise = Promise;
mongoose.connect(mongodbUrl, { server: { poolSize: 20 } });

const db = mongoose.connection;

db.on('error', err => {
  console.error('connect to %s error: ', mongodbUrl, err.message);
  process.exit(1);
});

db.once('open', () => {
  console.info('connect to %s success', mongodbUrl);
});
