import { mergeResolvers } from 'merge-graphql-schemas';
import accountResolver from '../resolvers/accountResolver';
import loginResolver from '../resolvers/loginResolver';

export default mergeResolvers([accountResolver, loginResolver]);
