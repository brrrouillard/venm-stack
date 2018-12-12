const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET Posts
router.get('/', (req, res) => {
    res.send('hello');
})

module.exports = router;