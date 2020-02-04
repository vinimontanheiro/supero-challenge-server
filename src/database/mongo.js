import mongoose from 'mongoose';
import logger from '../services/logger';
import addBook from '../services/addBook';
import { getRandomString, getRandomInt } from '../services/util';
import { LANGUAGE } from '../constants';

const connectMongoDB = () => {
  const config = {
    HOST: process.env.MONGODB_HOST,
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
    DATABASE: process.env.MONGODB_DB,
    PORT: process.env.MONGODB_PORT,
  };

  // const URL = `mongodb://${config.USER}:${config.PASSWORD}@${config.HOST}:${config.PORT}/${
  //   config.DATABASE
  // }`;

  const URL = `mongodb://localhost:27017/${config.DATABASE}`;

  mongoose.connect(
    URL,
    { useNewUrlParser: true, useUnifiedTopology: true, autoCreate: true },
  );

  mongoose.connection.on(`error`, err => {
    if (err) {
      logger.error(`ERROR - Can\`t connect to mongodb!!`);
      throw err;
    }
  });

  mongoose.connection.on(`connected`, () => {
    logger.info(`Mongo db connected successfully`);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 50; i++) {
      addBook({
        title: `${getRandomString(16)}`,
        image: `https://upload.wikimedia.org/wikipedia/commons/d/dd/Gray_book.png`,
        isbn: getRandomInt(1000, 1000000000),
        author: `${getRandomString(10)}`,
        publisher: `${getRandomString(10)}`,
        year: Number(`20${getRandomInt(10, 20)}`),
        language: LANGUAGE[getRandomInt(0, 2)],
        weight: getRandomInt(50, 400),
        dimensions: `${getRandomInt(20, 30)}x${getRandomInt(20, 30)}x${getRandomInt(20, 30)}`,
      });
    }
  });
};

export default connectMongoDB;
