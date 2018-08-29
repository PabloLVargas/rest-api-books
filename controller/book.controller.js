const Book = require('../model/book.model');

exports.book_create = (req, res) => {
    let book = new Book(
        {
            title: req.body.title,
            author: req.body.author,
            publisher: req.body.publisher,
            description: req.body.description,
            page_count: req.body.page_count,
            price: req.body.price
        }
    );

    book.save((err) => {
        if (err) {
            return next(err);
        }
        res.send({
            message: "Book Created",
            book_created: {
                title: book.title,
                author: book.author,
                publisher: book.publisher,
                description: book.description,
                page_count: book.page_count,
                price: book.price
            }
        })
    })
};

exports.book_details = (req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if (err) return next(err);
        res.send(book);
    })
};

exports.book_update = (req, res) => {
    Book.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, book) => {
        if (err) return next(err);
        res.send({
            message: "Book Updated",
            book_updated: {
                title: book.title,
                author: book.author,
                publisher: book.publisher,
                description: book.description,
                page_count: book.page_count,
                price: book.price
            }
        });
    });
};

exports.book_delete = (req, res) => {
    Book.findByIdAndRemove(req.params.id, (err) => {
        if (err) return next(err);
        res.send({
            message: "Book Deleted",
        });
    })
};