const { urlencoded } = require('express');
const express = require('express');
const app = new express();
const port = process.env.port || 9999;

const nav = [ // create nav bar menu as global object array
    {
        link: "/books",
        name: 'Books'
    },
    {
        link: '/authors',
        name: 'Author'
    },
    {
        link: '/login',
        name: 'Sign In'
    },
];

const BookRouter = require('./src/routes/BookRouter.js')(nav); //importing BookRouter.js file
const AuthorRouter = require('./src/routes/AuthorRouter.js')(nav); //importing AuthorRouter.js file
const loginRouter = require('./src/routes/loginRouter.js')(nav);
const signupRouter = require('./src/routes/signupRouter.js')(nav);

//ejs template inclusion
app.use(urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views')
app.use('/books', BookRouter);
app.use('/authors', AuthorRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);

app.get('/', function(req, resp) {
    resp.render('index', {
        nav,
        title: 'Library'
    });
});
app.get('/user', function(req, resp) {
    resp.render('book1', {
        nav,
        title: 'Library'
    });
});
// app.listen(8000);
app.listen(port, () => { console.log('Server is ready at ' + port) });