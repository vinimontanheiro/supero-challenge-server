import winston from 'winston';
import { Papertrail } from 'winston-papertrail';
import { isProduction } from '../constants';

const logger = winston.createLogger({
  level: `debug`,
  format: winston.format.json(),
  exitOnError: false,
  transports: [
    new winston.transports.File({ filename: `logs/error.log`, level: `error` }),
    new winston.transports.File({ filename: `logs/combined.log` }),
  ],
});

logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  }),
);

if (isProduction) {
  const paperTrailTransport = new Papertrail({
    host: `logs7.papertrailapp.com`,
    port: 37171,
    logFormat(level, message) {
      return `[${level}] ${message}`;
    },
  });

  logger.add(paperTrailTransport);

  paperTrailTransport.on(`error`, err => {
    console.error(
      `Papertrail can't not connect on ${paperTrailTransport.host}:${
        paperTrailTransport.port
      } : ${JSON.stringify(err)}`,
    );
  });
}

export default logger;
