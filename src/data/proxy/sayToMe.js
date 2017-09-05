import SayToMeModel from '../models/sayToMe';

export function find(conditions, options) {
  const qy = SayToMeModel.find(conditions).setOptions(options);
  return qy.exec();
}

export function findOne(conditions, options) {
  const qy = SayToMeModel.findOne(conditions).setOptions(options);
  return qy.exec();
}

export function update(id, data) {
  let qy = SayToMeModel.findByIdAndUpdate(id, { $set: data });
  return qy.exec();
}

export function create(name, account, content) {
  let doc = new SayToMeModel();
  doc.name = name;
  doc.account = account;
  doc.content = content;
  return doc.save();
}
