/* eslint-disable-next-line */
import 'babel-polyfill';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import expressPlayground from 'graphql-playground-middleware-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
// import { isProduction } from './constants';
import authMiddleware from './middlewares/auth-middleware';
import context from './services/context';
import logger from './services/logger';
import { GRAPHQL_WEBSOCKET_PORT } from './constants';

const graphQLServer = express();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  formatError: error => {
    logger.error(error);
    return error;
  },
  subscriptions: {
    onConnect: () => {
      logger.info(`onConnect subscriptions`);
    },
    onDisconnect: () => {
      logger.info(`onDisconnect subscriptions`);
    },
  },
  tracing: true,
});

graphQLServer.use(cors());
graphQLServer.use(bodyParser.json());
graphQLServer.use(`/graphql`, authMiddleware);
graphQLServer.use(`/api/*`, authMiddleware);

// if (!isProduction) {
graphQLServer.get(`/playground`, expressPlayground({ endpoint: `/graphql` }));
// }

apolloServer.applyMiddleware({ app: graphQLServer });

const websocketServer = createServer(graphQLServer);
apolloServer.installSubscriptionHandlers(websocketServer);

websocketServer.listen(GRAPHQL_WEBSOCKET_PORT, () => {
  logger.info(`🚀 Websockets server is now running on port: ${GRAPHQL_WEBSOCKET_PORT}`);
});

graphQLServer.get(`/`, (req, res) =>
  res.send({
    status: `UP`,
  }),
);


export default graphQLServer;
