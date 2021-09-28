const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const book_controller = require("./controllers/book_controller");

//  Instanitate an instance of express
const app = express();

//  Create PORT constant
const PORT = process.env.PORT || 3456;

//  Use the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//  Use the book controller
app.use(book_controller);

//  Create endpoint
app.get('/', (req, res) => {
    res.send("Welcome to BIMS");
});

app.listen(PORT, () => {
    console.log(`App running on Port ${PORT}`);
});
