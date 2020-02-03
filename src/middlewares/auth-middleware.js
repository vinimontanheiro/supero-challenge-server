import jwt from 'jsonwebtoken';
import { JWT_SECRET, isProduction, QUERY_TYPE } from '../constants';
import { Unauthorized } from '../services/error';
import logger from '../services/logger';

export default (req, res, next) => {
  const {
    body: { query },
    headers: { authorization },
  } = req;

  // if (query && !isProduction && query.includes(QUERY_TYPE.SCHEMA)) {
  // return next();
  // }

  if (query && query.includes(QUERY_TYPE.SCHEMA)) {
    // exposing graphql playground in production
    return next();
  }

  if (
    (query && query.includes(QUERY_TYPE.LOGIN)) ||
    (query && query.includes(QUERY_TYPE.NEW_ACCONT))
  ) {
    return next();
  }

  try {
    jwt.verify(authorization, JWT_SECRET);
    return next();
  } catch (err) {
    logger.error(`Unauthorized request | ${err}`);
    return res.send(new Unauthorized());
  }
};
