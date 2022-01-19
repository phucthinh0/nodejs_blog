const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ extname: '.hbs' });

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
//HTTP logger
//app.use(morgan('combined'));

//Template engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) =>  {
    res.render('home');
});

app.get('/new', (req, res) =>  {
    console.log(req.query.q);
    res.render('new'); 
});

app.get('/search', (req, res) =>  {
    res.render('search');
});

app.post('/search', (req, res) =>  {
    res.send('');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))