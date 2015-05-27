// $(function () {
// 	var V = Backbone.View.extend({
// 		render: function () {
// 			var templateMarkup = $('#latlon-template').html();
// 			var template = _.template(templateMarkup);
// 			this.$el.html(template({ lat: -27, lon: 153 }));

// 			return this;
// 		}
// 	});
// 	var v = new V({ el: 'body' });
// 	v.render();
// });

// $(function () {
// 	var data = {
// 		people: ['Mark Twain', 'Eric Arthur Blair', 'Salman Rushdie']
// 	};
// 	var rendered = Handlebars.templates.list(data);
// 	$('body').append(rendered);
// });

// $(function () {
// 	var User = Backbone.Model.extend({});
// 	var Users = Backbone.Collection.extend({
// 		model: User,
// 		comparator: function (user) {
// 			return user.get('sequence');
// 		}
// 	});
// 	var users = new Users([
// 			{ name: 'James', sequence: 2 },
// 			{ name: 'Jayson', sequence: 1 },
// 			{ name: 'Michelle', sequence: 3 }
// 		]);

// 	console.log(JSON.stringify(users));
// });

// $(function () {
// 	var User = Backbone.Model.extend({});
// 	var Users = Backbone.Collection.extend({ model: User });
// 	var users = new Users();
// 	users.add([
// 		{ name: 'James', age: 45 },
// 		{ name: 'Jayson', age: 37 },
// 		{ name: 'Michelle', age: 41 }
// 	]);
// 	users.on('add', function (model, collection) {
// 		console.log('added ' + model.get('name') + ' at index ' + this.indexOf(model));
// 	});
// 	users.add({ name: 'Leo', age: 9 });
// 	users.add({ name: 'Sadie', age: 11 }, { at: 3, silent: true });
// 	console.log(JSON.stringify(users));
// });

$(function () {
	var User = Backbone.Model.extend({});
	var Users = Backbone.Collection.extend({ model: User });
	var users = new Users();
	users.on('add', function (model, collection) {
		console.log(JSON.stringify(model) + ' added');
	});
	users.on('remove', function (model, collection) {
		console.log(JSON.stringify(model) + ' removed');
	});
	var model = new User({ name: 'Susanne', age: 46 });
	users.add(model);
	users.remove(model);
});