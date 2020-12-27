const express = require('express');
const loginRouter = express.Router();
const signUpRouter = require('../model/signupdata');

function route(nav) {
    loginRouter.get('/', function(req, resp) {
        resp.render('login', {
            nav: [{
                    link: '/login',
                    name: 'Login'
                }

            ],
            title: 'Login'
        });
    });

    loginRouter.post('', function(req, resp) {
        var username = req.body.username;
        var password = req.body.password;
        signUpRouter.findOne({ user: username, password: password }, (err, user) => {
            if (err) {
                console.log('Error:', err);
            }
            if (!user) {
                // throw new Error('BROKEN');
                return false;
                // console.log('not validd');
            } else {
                resp.redirect('/books');
            }
        });
    });

    return loginRouter;
}
module.exports = route;