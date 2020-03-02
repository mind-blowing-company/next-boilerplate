FROM node:10.16.3-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY server.js ./
COPY next.config.js ./

EXPOSE 3000

CMD ["yarn", "dev"]
