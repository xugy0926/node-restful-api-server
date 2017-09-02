import moment from 'moment';

function formatDate(date, friendly) {
  date = moment(date);

  if (friendly) {
    return date.fromNow();
  }
  return date.format('YYYY-MM-DD HH:mm');
}

export default function(schema) {
  schema.methods.create_at_ago = function() {
    return formatDate(this.create_at, true);
  };

  schema.methods.update_at_ago = function() {
    return formatDate(this.update_at, true);
  };
}
