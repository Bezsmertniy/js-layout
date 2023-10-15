// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
// Підключіть інші файли роутів, якщо є
const nav = require('./nav')
const scroll = require('./scroll')
const telegram = require('./telegram')
// Об'єднайте файли роутів за потреби
router.use('/', test)
router.use('/nav', nav)
router.use('/scroll', scroll)
router.use('/telegram', telegram)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
