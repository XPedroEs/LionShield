// Basic Express Structure
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Body-Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Acceder a archivos de la carpeta Public
app.use(express.static(path.join(__dirname, 'public')));

const session = require('express-session');
app.use(session({
    secret: 'ajsubonsidnbpq293$!20', 
    resave: false,
    saveUninitialized: false,
}));

// Rutas para acceder a la carpeta de rutas
const rutas = require('./routes/rutas');
const { request, response } = require('express');

// Rutas a utilizar
app.use('/agentes', rutas);
app.use('/', (request, response, redirect) => {
    response.redirect('/agentes/login');
});
app.use((request, response, next) => {
    app.use(express.static(path.join(__dirname, '..', 'public')));

    response.status(404);
    response.render('404');
});

app.listen(3000);