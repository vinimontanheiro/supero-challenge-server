import Book from '../models/Book';

export default () => Book.find().exec();
