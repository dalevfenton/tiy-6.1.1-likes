var Backbone = require('backbone');
var Button = require('./like').Button;

var Buttons = Backbone.Collection.extend({
  model: Button
});

module.exports = {Buttons: Buttons};
