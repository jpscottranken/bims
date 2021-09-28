const express = require('express');
const router  = express.Router();
const Book    = require('../models/book_model');

//  Insert a new title route
router.post('/book/', (req, res) => {
	Book.createNewBook(req.query, (err, result) => {
		//	Error handler
		if (err) {
			if (err.code === "ER_DUP_ENTRY") {
				res.send({ error: true, message: "Duplicate Title" });
			} else {
				res.send({ error: true, message: "Internal Server Error" });
			}
		} else {
			if (result.affectedRows > 0) {
				res.send({ error: false, message: "Title Successfully Inserted" });
			}
		}
    });
});

//  Show all titles route
router.get('/book/', (req, res) => {
    Book.getAllBooks((err, rows) => {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
            console.log(rows);
        }
    });
});

//  Show single title route
router.get('/book/:id?', (req, res) => {
    if (req.params.id) {
        Book.getBookById(req.params.id, (err, rows) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(rows);
                }
        });
    } else {
        res.send({ error: true, message: "Title Not Found" });
    }
});

//  Update single title route
router.put('/book/:id', (req, res) => {
    Book.updateBook(req.params.id, req.query, (err, rows) => {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

//  Delete single title route
router.delete('/book/:id', (req, res) => {
    Book.deleteBook(req.params.id, (err, count) => {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

module.exports = router;
