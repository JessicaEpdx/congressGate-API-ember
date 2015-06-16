import Ember from "ember";

var HouseBillsController = {
  sortProperties: ['context:desc'],
  sortedHouseBills: Ember.computed.sort('model', 'sortProperties'),
};

export default Ember.Controller.extend(HouseBillsController);
