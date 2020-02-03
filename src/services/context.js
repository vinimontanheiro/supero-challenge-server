import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants';

const getPayloadFromToken = token => {
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return {
      token,
      ...payload,
    };
  } catch (e) {
    return {};
  }
};

const context = ({ req }) => ({
  payload: req && req.headers ? getPayloadFromToken(req.headers.authorization) : {},
});

export default context;
