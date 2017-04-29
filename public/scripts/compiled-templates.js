Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
  helpers = helpers || Ember.Handlebars.helpers;data = data || {};
  var buffer = '';
  var hashTypes;
  var escapeExpression=this.escapeExpression;


  data.buffer.push("<h2>Welcome to Ember.js</h2>\n\n");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashTypes,data})));
  data.buffer.push("\n");
  return buffer;
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
  helpers = helpers || Ember.Handlebars.helpers;data = data || {};
  var buffer = '';
  var stack1;
  var hashTypes;
  var escapeExpression=this.escapeExpression;
  var self=this;

  function program1(depth0,data) {
    var buffer = '';
    var hashTypes;
    data.buffer.push("\n  <li>");
    hashTypes = {};
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item", {hash:{},contexts:[depth0],types:["ID"],hashTypes,data})));
    data.buffer.push("</li>\n");
    return buffer;
  }

  data.buffer.push("<ul>\n");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "item", "in", "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes,data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
});