const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
    title: {type: String, required: true, max: 100},
    author: {type: String, required: true, max: 70},
    publisher: {type: String, required: true, max: 70},
    description: {type: String, required: true, max: 250},
    page_count: {type: Number, required: true},
    price: {type: Number, required: true},
});

module.exports = mongoose.model('Book', BookSchema);