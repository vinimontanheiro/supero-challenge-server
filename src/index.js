import engine from './services/engine';
import logger from './services/logger';
import graphQLServer from './server';
import { SERVER_PORT, isProduction } from './constants';
import connectMongoDB from './database/mongo';

connectMongoDB();

if (isProduction) {
  engine.listen({
    port: SERVER_PORT,
    expressApp: graphQLServer,
    graphqlPaths: [`/graphql`],
    launcherOptions: {
      startupTimeout: 3000,
    },
    origin: {
      requestTimeout: `29s`,
    },
  });
  logger.info(`🚀 GraphQL with Apollo engine is now running on port: ${SERVER_PORT}`);
} else {
  graphQLServer.listen({ port: SERVER_PORT }, () => {
    logger.info(`🚀 GraphQL is now running on port: ${SERVER_PORT}`);
  });
}

logger.on(`error`, err => {
  logger.error(`Unhandled exception: ${err}`);
});
