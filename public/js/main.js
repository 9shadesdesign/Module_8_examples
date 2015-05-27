var BL = BL || {};
BL.models = BL.models || {};
BL.collections = BL.collections || {};
BL.views = BL.views || {};
BL.templates = BL.templates || {};
BL.routers = BL.routers || {};

$(function () {


	BL.models.Book = Backbone.Model.extend({
		idAttribute: '_id',
		defaults: {
			read: false
		}
	});

	BL.collections.Books = Backbone.Collection.extend({
		model: BL.models.Book,
		url: '/books'
	});

	var midnight = new BL.models.Book();

	// midnight.save().done(function () {
	// 	console.log('done');
	// });

	var books = new BL.collections.Books();

	books.create({
		title: 'Midnight in the garden of good and evil',
		author: 'John Berendt',
		genre: 'fiction'
	});
	books.fetch().done(function () {
		console.log('books: ', books);
	});
	
});