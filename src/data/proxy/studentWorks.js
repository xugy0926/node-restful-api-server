import StudentWorks from '../models/studentWorks';

export function find(conditions, options) {
  const qy = StudentWorks.find(conditions).setOptions(options);
  return qy.exec();
}

export function findOne(conditions, options) {
  const qy = StudentWorks.findOne(conditions).setOptions(options);
  return qy.exec();
}

export function update(id, data) {
  let qy = StudentWorks.findByIdAndUpdate(id, { $set: data });
  return qy.exec();
}

export function create(name, account, url, member, description) {
  let doc = new StudentWorks();
  doc.name = name;
  doc.account = account;
  doc.url = url;
  doc.member = member;
  doc.description = description;
  return doc.save();
}
