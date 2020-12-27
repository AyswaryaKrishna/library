const express = require('express');
const AuthorRouter = express.Router();
const AuthorData = require('../model/authordata');

function route(nav) {

    AuthorRouter.get('/', function(req, resp) {
        AuthorData.find()
            .then(function(Author) {
                resp.render('authors', {
                    nav,
                    title: 'Authors',
                    page: 'addauthor',
                    Author
                });
            })

    });

    AuthorRouter.get('/addauthor', function(req, resp) {
        resp.render('addauthor', {
            nav: [{
                    link: '/authors',
                    name: 'Authors'
                }

            ],
            title: 'Add Author',
            page: 'addauthor'
        });
    });

    AuthorRouter.get('/addauthor/add', function(req, resp) {
        var authorItem = {
            author: req.query.author,
            country: req.query.country,
            category: req.query.category,
            image: req.query.image
        }
        var author = AuthorData(authorItem);
        author.save();
        resp.redirect('/authors/addauthor');
    });
    // delete
    AuthorRouter.get('/delete/:id', function(req, resp) {
        AuthorData.deleteOne({ _id: req.params.id })
            .then(() => {
                resp.redirect('/authors');
            })
            .catch((err) => {
                console.log(err);
            })
    });
    var authorId;

    //    update

    AuthorRouter.get('/updateauthor/:id', function(req, resp) {
        authorId = req.params.id;
        AuthorData.findOne({ _id: authorId })
            .then(function(Author) {
                resp.render('updateauthor', {
                    nav: [{
                            link: '/authors',
                            name: 'Authors'
                        }

                    ],
                    title: 'Update Author',
                    page: 'updateauthor',
                    Author
                })
            })
    });

    AuthorRouter.get('/updateauthor', function(req, resp) {
        var authorItem = {
            author: req.query.author,
            country: req.query.country,
            category: req.query.category,
            image: req.query.image
        }
        authorItem = { $set: authorItem }
        AuthorData.updateOne({ _id: authorId }, authorItem)
            .then(() => {
                resp.redirect('/authors');
            })
            .catch((err) => {
                console.log(err);
            })
    });
    AuthorRouter.get('/addauthor', function(req, resp) {
        resp.render('addauthor', {
            nav,
            title: 'Add Author',
            page: 'addauthor'
        });
    });

    AuthorRouter.get('/:id', function(req, resp) {
        const id = req.params.id;
        AuthorData.findOne({ _id: id })
            .then(function(Author) {
                resp.render('author', {
                    nav,
                    title: 'Author',
                    page: 'addauthor',
                    Author
                });
            })

    });

    return AuthorRouter;
}

module.exports = route;