import Book from '../models/Book';

export default newBook => {
  return new Book(newBook).save();
};
