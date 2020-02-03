import path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

const types = fileLoader(path.join(__dirname, `./types`));
const methods = fileLoader(path.join(__dirname, `./methods`));
const typeDefs = mergeTypes([...types, ...methods], { all: true });

export default typeDefs;
