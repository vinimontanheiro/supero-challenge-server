import bookList from '../repository/bookRepository';

const listBooks = async (_, { term, year }) => {
  const books = await bookList({ term, year });
  return books;
};

const BooktResolver = {
  Query: {
    listBooks,
  },
};

export default BooktResolver;
