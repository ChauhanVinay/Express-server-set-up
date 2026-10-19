const express = require('express');

const router =  express.Router();

router.get('/books', (req, res) => {
    console.log('Fetching all books...');
    res.send("Here is the list of books");
});

router.post('/books', (req, res) => {
    console.log('Book data received');
    res.send("Book has been added!");
});

module.exports = router;
