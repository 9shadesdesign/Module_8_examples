var express = require('express');

function bookRouter(Book) {

	var router = express.Router();

	router.route('/')
		.get(function (request, response) {
			Book.find(function (error, books) {
				if (error) {
					response.status(500).send(error);
				} else {
					response.send(books);
				}
			});
		})
		.post(function (request, response) {
			console.log('request.body: ', request.body);
			var newBook = new Book(request.body);
			console.log('newBook: ', newBook);
			newBook.save(function (error, book) {
				if (error) {
					response.status(500).send(error);
				} else {
					response.status(201).send(book);
				}
			});
		});

	router.route('/:id')
		.all(function (request, response, next) {
			var id = request.params.id;

			Book.findById(id, function (error, book) {
				if (error) {
					response.status(500).send(error);
				} else {
					request.foundBook = book;
					next();
				}
			});
		})
		.get(function (request, response) {
			if (request.foundBook) {
				response.send(request.foundBook);
			} else {
				response.status(404).json('book not found');
			}
		})
		.put(function (request, response) {
			if (request.foundBook) {
				request.foundBook.update(request.body, function (error) {
					if (error) {
						response.status(500).send(error);
					} else {
						response.sendStatus(200);
					}
				});
			} else {
				response.status(404).json('book not found');
			}
		})
		.delete(function (request, response) {
			console.log('foundBook: ', request.foundBook);
			if (request.foundBook) {
				request.foundBook.remove(function (error) {
					if (error) {
						response.status(500).send(error);
					} else {
						response.sendStatus(200);
					}
				})
			}
		});

	return router;
}

module.exports = bookRouter;