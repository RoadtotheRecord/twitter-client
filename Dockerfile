### nodejs start
FROM node:alpine
WORKDIR /app/react-twitter
COPY ./react-twitter/package.json ./
RUN yarn install
CMD ["yarn", "start"]