const express = require('express');
const { addBook, getBookDetails } = require('../controllers/bookController');

const router = express.Router();

router.post('/', addBook);
router.get('/:id', getBookDetails);

module.exports = router;
