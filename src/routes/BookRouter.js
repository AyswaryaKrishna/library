const express = require('express');
const BookRouter = express.Router();
const BookData = require('../model/bookdata');
const multer = require('multer');
// const path=require('path');
const fs = require('fs');
const { Buffer } = require('buffer');
const { title } = require('process');

function route(nav) {


    BookRouter.get('/', function(req, resp) {
        BookData.find()
            .then(function(Books) {
                resp.render('books', {
                    nav,
                    title: 'Books',
                    page: 'addbook',
                    Books
                });
            })

    });
    BookRouter.get('/user', function(req, resp) {
        BookData.find()
            .then(function(Books) {
                resp.render('book1', {
                    nav,
                    title: 'Books',

                    Books
                });
            })

    });

    BookRouter.get('/addbook/add', function(req, resp) {
        var bookItem = {
            title: req.query.title,
            author: req.query.author,
            genre: req.query.genre,
            image: req.query.image
        }
        var book = BookData(bookItem);
        book.save();
        resp.redirect('/books/addbook');
    });

    BookRouter.get('/delete/:id', function(req, resp) {
        BookData.deleteOne({ _id: req.params.id })
            .then(() => {
                resp.redirect('/books');
            })
            .catch((err) => {
                console.log(err);
            })
    });
    var bookId;
    BookRouter.get('/updatebook/:id', function(req, resp) {
        bookId = req.params.id;
        BookData.findOne({ _id: bookId })
            .then(function(Book) {
                resp.render('updatebook', {
                    nav: [{
                            link: '/books',
                            name: 'Books'
                        }

                    ],
                    title: 'Update Book',
                    page: 'updatebook',
                    Book
                })
            })
    });

    BookRouter.get('/updatebook', function(req, resp) {
        var bookItem = {
            title: req.query.title,
            author: req.query.author,
            genre: req.query.genre,
            image: req.query.image
        }
        bookItem = { $set: bookItem }
        BookData.updateOne({ _id: bookId }, bookItem)
            .then(() => {
                resp.redirect('/books');
            })
            .catch((err) => {
                console.log(err);
            })
    });

    BookRouter.get('/addbook', function(req, resp) {
        resp.render('addbook', {
            nav,
            title: 'Add Book',
            page: 'addbook'
        });
    });

    BookRouter.get('/:id', function(req, resp) {
        const id = req.params.id;
        BookData.findOne({ _id: id })
            .then(function(Book) {
                resp.render('book', {
                    nav,
                    title: 'Book',
                    page: 'addbook',
                    Book
                });
            })

    });
    return BookRouter;
}

module.exports = route;