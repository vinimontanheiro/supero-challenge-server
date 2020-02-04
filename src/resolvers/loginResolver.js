import { generatePasswordHash, generateToken } from '../services/util';
import { BadRequest, Unauthorized } from '../services/error';
import { getAccountByEmail } from '../repository/accountRepository';

const login = async (_, { email, password }) => {
  const account = await getAccountByEmail(email);
  console.log(`account >> `, account);
  if (account) {
    const { salt, password: storedPassword } = account;
    const hashPassword = generatePasswordHash({ password, salt });
    if (storedPassword === hashPassword) {
      return generateToken(account);
    }
    return new Unauthorized(`wrong_password`);
  }

  return new BadRequest(`account_not_found`);
};

const AccountResolver = {
  Mutation: {
    login,
  },
};

export default AccountResolver;
