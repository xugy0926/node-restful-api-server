import mongoose from 'mongoose';
import BaseModel from './base_model';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  appId: { type: String, requried: true },
  name: { type: String },
  loginname: { type: String, required: true },
  pass: { type: String, required: true },
  email: { type: String },
  url: { type: String },
  profile_image_url: { type: String },
  location: { type: String },
  signature: { type: String },
  profile: { type: String },
  weixin: { type: String },
  qq: { type: String },
  weibo: { type: String },
  avatar: { type: String },
  githubId: { type: String },
  githubUsername: { type: String },
  githubAccessToken: { type: String },
  active: { type: Boolean, default: false },
  receive_reply_mail: { type: Boolean, default: false },
  receive_at_mail: { type: Boolean, default: false },
  retrieveTime: { type: Number },
  retrieveKey: { type: String },
  accessToken: { type: String },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
});

UserSchema.plugin(BaseModel);
var UserModel = mongoose.model('User', UserSchema);

export default UserModel;
