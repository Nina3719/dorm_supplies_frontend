const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../app/models/config');

router.get('/', (req, res, next) => {
    return res.render('index');
});

router.post('/register', (req,res,next) => {
  request.post({
    url: config.apiUrl + '/users',
    form: req.body
  }).pipe(res)
})

router.get('/login', (req, res, next) => {
    return res.render('login');
});

router.get('/update', (req, res, next) => {
    return res.render('update');
});

router.get('/homepage', (req, res, next) => {
    return res.render('homepage');
});

router.get('/add', (req, res, next) => {
    return res.render('item');
});

router.post('/additem', (req,res,next) => {
  request.post({
    url: config.apiUrl + '/items',
    form: req.body
  }).pipe(res)
})

module.exports = router;
