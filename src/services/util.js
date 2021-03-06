import { pick } from 'ramda';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants';

export const generateSalt = () =>
  crypto
    .randomBytes(Math.ceil(16 / 2))
    .toString(`hex`)
    .slice(0, 16);

export const generatePasswordHash = ({ password, salt }) =>
  crypto
    .createHmac(`sha256`, salt)
    .update(password)
    .digest(`hex`);

export const generateToken = account => {
  const properties = [`id`, `email`];
  const payload = pick(properties, account);
  const token = jwt.sign(
    {
      ...payload,
    },
    JWT_SECRET,
    {
      expiresIn: `6h`,
    },
  );
  return {
    token,
    account,
  };
};

export const generateHashPassword = password => {
  const salt = generateSalt();
  const hashPassword = generatePasswordHash({ password, salt });
  return {
    salt,
    hashPassword,
  };
};

export const getRandomString = length => {
  const mask = `abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789`;
  let result = ``;
  for (let i = length; i > 0; i -= 1) result += mask[Math.floor(Math.random() * mask.length)];
  return result;
};

export const getRandomInt = (min, max) => {
  const m = Math.ceil(min) || 0;
  const ma = Math.floor(max) || 13;
  return Math.floor(Math.random() * (ma - m)) + m;
};
