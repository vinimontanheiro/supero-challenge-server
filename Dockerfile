FROM node:vv12.14.1-alpine

RUN apk add --no-cache curl

RUN mkdir -p opt/app
WORKDIR opt/app

ADD . .

RUN yarn && \
    yarn build && \
    yarn global add pm2

EXPOSE 3000

CMD ["pm2-runtime", "pm2.config.yml", "--env", "production"]