window.$ = require('jquery');
window._ = require('underscore');
var Handlebars = require('handlebars');
var buttonDisp = require('../templates/button.handlebars');
var buttonList = require('../templates/buttonlist.handlebars');
// var Button = require('./models/like.js').Button;
var Buttons = require('./models/buttons.js').Buttons;
//to include an external handlebars template named header.handlebars
//just do a var header = require("./header.handlebars") assuming it is in
//the scripts folder
// $('#button-holder').html(buttonDisp({number: 2, likes:'s'}));


var buttonGroup = new Buttons([
  {},
  { number: 100, likes: 's', click: 'subtract', icon:'minus' }
]);

buttonGroup.each(function(item){
  console.log(item);
});
$(function(){
  $('#button-holder').html(buttonList(buttonGroup.toJSON()));
  $('.like-button').click( doClick );
});

function doClick( event ){
  var id = $(this).attr('id').slice(-2);
  buttonGroup.get(id).runLike();
  // console.log(model);
  $('#button-holder').html(buttonList(buttonGroup.toJSON()));
  $('.like-button').click( doClick );
}
