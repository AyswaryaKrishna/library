const express = require('express');
const signupdata = require('../model/signupdata');
const signupRouter = express.Router();

function route(nav) {
    signupRouter.get('/', function(req, resp) {
        resp.render('signup', {
            nav: [{
                    link: '/login',
                    name: 'Login'
                }

            ],
            title: "Sign Up"
        });
    });

    signupRouter.post('/add', function(req, resp) {
        var signupItem = {
            user: req.body.user,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone
        }
        var registration = signupdata(signupItem);
        registration.save();
        resp.redirect('/login');
    });

    return signupRouter;
}
module.exports = route;