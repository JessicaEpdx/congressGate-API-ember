import Ember from "ember";

var LegislatorsController = {
  actions: {
    submit: function(){
      this.transitionToRoute('contact', this.get('zip'));
    },
  }
};

export default Ember.Controller.extend(LegislatorsController);
