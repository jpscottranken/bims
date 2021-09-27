const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

//  Instanitate an instance of express
const app = express();

//  Create PORT constant
const PORT = process.env.PORT || 3000;

//  Create endpoint
app.get('/', (req, res) => {
    res.send("Welcome to BIMS");
});

app.listen(PORT, () => {
    console.log(`App running on Port ${PORT}`);
});
