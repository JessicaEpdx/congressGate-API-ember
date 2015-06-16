import Ember from "ember";

var SenateBillsController = {
  sortProperties: ['context:desc'],
  sortedSenateBills: Ember.computed.sort('model', 'sortProperties'),
};

export default Ember.Controller.extend(SenateBillsController);
