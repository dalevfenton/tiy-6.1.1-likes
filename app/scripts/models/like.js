var Backbone = require('backbone');
var Button = Backbone.Model.extend({
  defaults: {
    "number": 0,
    "click": 'add',
    "icon": 'plus'
  },
  initialize: function(){
    this.set({"id": this.cid});
  },
  runLike: function(){
    if(this.get("click") == 'add'){
      this.set({"number": this.get("number") + 1 });
    }else if(this.get("click") == 'subtract'){
      this.set({"number": this.get("number") - 1 });
    }
  },
  toJSON: function(){
    console.log(this);
    var output = {};
    if(this.get("number") == 1){
      output.string = '1 like';
    }else{
      output.string = this.get("number") + ' likes';
    }

    output = _.extend(output, this.attributes);
    // console.log(output);
    return output;
  }
});

module.exports = { Button: Button };
