import bookList from '../repository/bookRepository';

const listBooks = async () => {
  const books = await bookList();
  return books;
};

const BooktResolver = {
  Query: {
    listBooks,
  },
};

export default BooktResolver;
