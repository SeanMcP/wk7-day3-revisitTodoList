const express = require('express')
const models = require('../models/index')
const router = express.Router()

router.get('/', function(req, res) {
  models.Todo.findAll()
  .then(function(data) {
      console.log('get / data:\n', data)
      res.render('index', {data: data})
    })
    .catch(function(err) {
      res.send(err)
    })
})

router.post('/create', function(req, res) {
  models.Todo.create({
    title: req.body.title
  })
  .then(function(data) {
    console.log('post /create data:\n', data)
    res.redirect('/')
  })
})

router.get('/check/:id', function(req, res) {
  
})

module.exports = router
