import Book from '../models/Book';

export default ({ term, year }) => {
  let query = {};
  let multipleQuery = {};

  if (year) {
    query = { year };
  }
  if (term) {
    const like = { $regex: term, $options: `i` };
    multipleQuery = [{ title: like }, { author: like }, { isbn: like }];
  }

  return Book.find(query)
    .or(multipleQuery)
    .exec();
};
