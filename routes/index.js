const express = require('express')
const models = require('../models/index')
const router = express.Router()

router.get('/', function(req, res) {
  models.Todo.findAll()
  .then(function(data) {
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
    res.redirect('/')
  })
})

// ********************************
// Delete
// ******************************** //

router.get('/delete/:id', function(req, res) {
  models.Todo.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(data) {
    res.redirect('/')
  })
})

// ********************************
// Check and Uncheck
// ******************************** //

router.get('/check/:id', function(req, res) {
  models.Todo.update({
    completedAt: Date.now(),
  }, { where: { id: req.params.id } })
  .then(function(data) {
    res.redirect('/')
  })
})
router.get('/uncheck/:id', function(req, res) {
  models.Todo.update({
    completedAt: null,
  }, { where: { id: req.params.id } })
  .then(function(data) {
    res.redirect('/')
  })
})

module.exports = router
