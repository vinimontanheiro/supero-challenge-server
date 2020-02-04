import mongoose from 'mongoose';

const { Schema } = mongoose;

const Book = new Schema({
  title: { type: String, required: true },
  image: String,
  isbn: { type: String, max: 13, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  year: Number,
  language: String,
  weight: Number,
  dimensions: String,
  created: { type: Date, default: Date.now },
});

export default mongoose.model(`Book`, Book);
