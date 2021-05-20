const express = require('express');
const router = express.Router();
const isAuth1 = require('../util/isAuth1');
const isAuth2 = require('../util/isAuth2');
const isAuth3 = require('../util/isAuth3');
const isAuth4 = require('../util/isAuth4');
const isAuth5 = require('../util/isAuth5');
const path = require('path');

// Aqui van las rutas...
const rutas = require('../controller/controller');

router.get('/intruso', rutas.getIntruso);

router.get('/login', rutas.getLogin);

router.post('/login', rutas.postLogin);

router.get('/reto1', isAuth1, rutas.getReto1);

router.post('/reto1', isAuth1, rutas.postReto1);

router.get('/reto2', isAuth2, rutas.getReto2);

router.post('/reto2', isAuth2, rutas.postReto2);

router.get('/reto3', isAuth3, rutas.getReto3);

router.post('/reto3', isAuth3, rutas.postReto3);

router.get('/reto4', isAuth4, rutas.getReto4);

router.post('/reto4', isAuth4, rutas.postReto4);

router.get('/final', isAuth5, rutas.getFinal);

router.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = router;