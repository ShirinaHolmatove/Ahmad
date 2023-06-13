

const express = require('express');
const path = require('path');

const ejsMate = require('ejs-mate');
const session = require('express-session');


const methodOverride = require('method-override');


const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));







app.get('/', (req, res) => {
    res.render('home')
});
app.get('/resume', (req, res) => {
    res.render('resume')
});

app.get('/contact', (req, res) => {
    res.render('contact')
});


app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to npm port ${port}`));

