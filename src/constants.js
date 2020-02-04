export const JWT_SECRET = `supero-challenge`;

export const QUERY_TYPE = {
  LOGIN: `login`,
  SCHEMA: `IntrospectionQuery`,
  NEW_ACCONT: `newAccount`,
  LIST_BOOK: `listBooks`,
};

export const HTTP_STATUS = {
  UNAUTHORIZED: 401,
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  CREATED: 201,
  INTERNAL_SERVER_ERROR: 500,
};

export const isProduction = process.env.NODE_ENV === `production`;

export const SERVER_PORT = process.env.PORT || 9001;

export const GRAPHQL_WEBSOCKET_PORT = 4000;

export const LANGUAGE = {
  1: `pt_BR`,
  2: `en_US`,
  3: `es`,
};
