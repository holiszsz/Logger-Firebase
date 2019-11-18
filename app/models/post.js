import Model, { attr } from '@ember-data/model';

export default Model.extend({
  title: attr('string'),
  category: attr('string'),
  amount: attr('number'),
  timestamp: attr('number'),
  createdAt: attr('date', {
    defaultValue() { return new Date(); }
  })
});
