const db = require('../dbconnection');
const Book = {
	getAllBooks: (callback) => {
		return db.query("SELECT * FROM titles ORDER BY title_id DESC", callback);
	},

	getBookById: (id, callback) => {
		return db.query("SELECT * FROM titles WHERE title_id = ?", [id], callback);
	},

	deleteBook: (id, callback) => {
		return db.query("DELETE FROM titles WHERE title_id = ?", [id], callback);
	},

	updateBook: (id, Book, callback) => {
		return db.query("UPDATE titles SET ? WHERE title_id = ?", [Book, id], callback);
	},

	createNewBook: (Book, callback) => {
		const book = {
			isbn:			Book.isbn,
			title:			Book.title,
			edition_number:	Book.edition_number,
			copyright:		Book.copyright,
			publisher_id:	Book.publisher_id,
			price:			Book.price
		}
		
		return db.query("INSERT INTO titles SET ?", book, callback);
	}
};

module.exports = Book;
