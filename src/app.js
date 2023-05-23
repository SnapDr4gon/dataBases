const express = require('express');
const path = require('path');
const morgan= require('morgan');
const mysqld= require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysqld, {
    host: '127.0.0.1',
    user: 'root',
    password: '$napGeek277390',
    port: 48546,
    database: 'crud'
}, 'single'));

app.listen(app.get('port'), () => {
    console.log("Server on port 3000");
});