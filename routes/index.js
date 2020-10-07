const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    //res.send('Hello world - this is my first web :))')

    res.render('index')
})

module.exports = router //help to use router out of this file