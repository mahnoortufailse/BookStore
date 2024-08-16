import book_model from "../model/book_model.js";
import { catchAsync } from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
// Improved getBook function
export const getBook = catchAsync(async (req, res, next) => {
  const books = await book_model.find(); // Assuming book_model.find() returns an array of books
  if (books.length === 0) {
    return  next(new AppError(`Books not found` , 404));;
  }
  return res.json(books);
});


