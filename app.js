const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const book = require('./route/book.route');
const app = express();

let mLabURL = 'mongodb://pablo:julian01@ds045632.mlab.com:45632/api_books';
const mongoDB = process.env.MONGODB_URI || mLabURL;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/books', book);

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});