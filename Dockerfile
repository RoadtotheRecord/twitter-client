### node_modules install
FROM node:14.15.0-alpine AS node_modules
WORKDIR /app
COPY ./react-twitter/package*.json ./
COPY ./react-twitter/yarn.lock ./
RUN yarn install

### nodejs start
FROM node:14.15.0-alpine
WORKDIR /app/react-twitter
COPY --from=node_modules /app/node_modules ./node_modules
COPY ./react-twitter/package*.json ./
COPY ./react-twitter/yarn.lock ./
COPY ./react-twitter/.env ./
CMD ["yarn", "start"]