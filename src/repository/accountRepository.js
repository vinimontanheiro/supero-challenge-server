import client from '../database/postgres';
import logger from '../services/logger';
import { Created, OK } from '../services/message';
import { CustomError } from '../services/error';

export const save = ({ name, email, hashPassword, salt }) => {
  return client
    .query(`INSERT INTO account(name, email, password, salt) VALUES($1, $2, $3, $4)`, [
      name,
      email,
      hashPassword,
      salt,
    ])
    .then(() => {
      return new Created(`new_account_created_successfully`);
    })
    .catch(e => {
      logger.error(e.stack);
      return new CustomError(`it_was_not_possible_to_create_a_new_account`);
    });
};

export const get = id => {
  return client
    .query(`SELECT id, name, email, password, created FROM account WHERE id=$1`, [id])
    .then(res => {
      return res.rows[0];
    })
    .catch(e => {
      logger.error(e.stack);
      return new CustomError(e.stack);
    });
};

export const getAccountByEmail = email => {
  return client
    .query(`SELECT id, name, email, password, salt, created FROM account WHERE email=$1`, [email])
    .then(res => {
      return res.rows[0];
    })
    .catch(e => {
      logger.error(e.stack);
      return new CustomError(e.stack);
    });
};

export const update = ({ id, email, name }) => {
  return client
    .query(`UPDATE account SET email=$2, name=$3 WHERE id=$1`, [id, email, name])
    .then(() => {
      return new OK(`account_updated_successfully`);
    })
    .catch(e => {
      logger.error(e.stack);
      return new CustomError(e.stack);
    });
};

export const list = () => {
  return client
    .query(`SELECT id, name, email, password, created FROM account`)
    .then(res => {
      return res.rows;
    })
    .catch(e => {
      logger.error(e.stack);
      return new CustomError(e.stack);
    });
};

export const remove = id => {
  return client
    .query(`DELETE FROM account WHERE id=$1`, [id])
    .then(() => {
      return new OK(`account_removed_successfully`);
    })
    .catch(e => {
      logger.error(e.stack);
      return new CustomError(e.stack);
    });
};
