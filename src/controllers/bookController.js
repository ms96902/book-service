const Book = require('../models/bookModel');

exports.addBook = async (req, res) => {
  try {
    const { title, author, genre, condition, availability, userId } = req.body;
    const book = new Book({ title, author, genre, condition, availability, userId });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBookDetails = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
