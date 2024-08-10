import book_model from "../model/book_model.js";

export const getBook = async (req, res) => {
  try {
    const book = await book_model.find();
    if (!book) {
      return res.status(404).json({ message: "Not found" });
    }
    return res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
