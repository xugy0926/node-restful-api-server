import mongoose from 'mongoose';
import BaseModel from './base_model';

const Schema = mongoose.Schema;

const SayToMeSchema = new Schema({
  name: { type: String, requried: true },
  account: { type: String, required: true },
  content: { type: String, required: true },
  delete: { type: String, default: false },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
});

SayToMeSchema.plugin(BaseModel);
var SayToMeModel = mongoose.model('SayToMe', SayToMeSchema);

export default SayToMeModel;
