import { Pool } from 'pg';
import { isProduction } from '../constants';

const pgConnect = () => {
  if (isProduction) {
    return new Pool({
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5432,
    });
  }
  return new Pool({
    user: `postgres`,
    host: `postgres`,
    database: `supero_challenge`,
    password: `postgres`,
    port: 5432,
  });
};

export default pgConnect();
