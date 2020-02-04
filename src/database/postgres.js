import { Pool } from 'pg';

const pgConnect = () => {
  const config = {
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
  };
  return new Pool(config);
};

export default pgConnect();
