const express = require('express')
const router = express.Router()
const knex = require('../db')

router.get('/', (req, res, next) => {
  console.log('start get route');
  knex('expenses')
    .then(expenses => {
      console.log('through knex');
      res.json(expenses)
    })
    .catch(err => next(err))
})

router.post('/', (req, res, next) => {
  knex('expenses')
    .insert({category: req.body.category, amount: req.body.amount})
    .returning('*')
    .then(expenses => res.json(expenses[0]))
    .catch(err => next(err))
})

router.patch('/:id', (req, res, next) => {
  knex('expenses')
    .update({category: req.body.category, amount: req.body.amount})
    .where({id: req.params.id})
    .returning('*')
    .then(expenses => res.json(expenses[0]))
    .catch(err => next(err))
})

router.delete('/:id', (req, res, next) => {
  knex('expenses')
    .del()
    .where({id: req.params.id})
    .then(expenses => res.end())
    .catch(err => next(err))
})

module.exports = router
