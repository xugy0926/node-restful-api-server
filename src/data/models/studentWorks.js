import mongoose from 'mongoose';
import BaseModel from './base_model';

const Schema = mongoose.Schema;

const StudentWorksSchema = new Schema({
  name: { type: String, requried: true },
  account: { type: String, required: true },
  url: { type: String, required: true },
  member: { type: String, required: false },
  description: { type: String, required: false },
  delete: { type: Boolean, default: false },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
});

StudentWorksSchema.plugin(BaseModel);
var StudentWorksModel = mongoose.model('StudentWorks', StudentWorksSchema);

export default StudentWorksModel;
