import { Pool } from 'pg';

const pgConnect = () => {
  const config = {
    user: process.env.POSTGRES_USER,
    host: `localhost`,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: `5433`,
  };
  return new Pool(config);
};

export default pgConnect();
