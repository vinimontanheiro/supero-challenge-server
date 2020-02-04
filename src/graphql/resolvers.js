import { mergeResolvers } from 'merge-graphql-schemas';
import accountResolver from '../resolvers/accountResolver';
import loginResolver from '../resolvers/loginResolver';
import bookResolver from '../resolvers/bookResolver';

export default mergeResolvers([accountResolver, loginResolver, bookResolver]);
