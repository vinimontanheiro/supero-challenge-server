import { generateHashPassword } from '../services/util';
import { save, get, update, list, remove } from '../repository/accountRepository';

const newAccount = async (_, { name, email, password }) => {
  const { hashPassword, salt } = generateHashPassword(password);
  const newAccountData = {
    name,
    email,
    hashPassword,
    salt,
  };
  const result = await save(newAccountData);
  return result;
};

const getAccount = async (_, { id }) => {
  const account = await get(id);
  return account;
};

const getAccountProfile = async (_, {}, { payload: { id } }) => {
  const account = await get(id);
  return account;
};

const updateAccount = async (_, { id, email, name }) => {
  const result = await update({ id, email, name });
  return result;
};

const listAccounts = async () => {
  const accounts = await list();
  return accounts;
};

const removeAccount = async (_, { id }) => {
  const accounts = await remove(id);
  return accounts;
};

const AccountResolver = {
  Mutation: {
    newAccount,
    updateAccount,
    removeAccount,
  },
  Query: {
    getAccountProfile,
    getAccount,
    listAccounts,
  },
};

export default AccountResolver;
