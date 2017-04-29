App = Ember.Application.create({
	rootElement: $('#ember')
});

App.Router.map(() => {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model() {
    return ['pretty', 'damn', 'awesome'];
  }
});
