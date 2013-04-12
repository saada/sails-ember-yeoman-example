App = Ember.Application.create({
	rootElement: $('#ember')
});

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['pretty', 'damn', 'awesome'];
  }
});
