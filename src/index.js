const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ extname: '.hbs' });

const route = require('./routes');
const db = require('./config/db');

//Connect to db
db.connect();

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


//Route init
route(app);




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));