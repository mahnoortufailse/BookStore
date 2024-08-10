import mongoose from "mongoose";
import { Schema } from "mongoose";

// Define the schema for the book
const bookSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  book: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: String, 
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

// Create the model from the schema
const Book = mongoose.model('Book', bookSchema);

export default Book;
