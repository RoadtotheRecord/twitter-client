FROM node:14.15.0-alpine
WORKDIR /usr/src/app
RUN npm install -g create-react-app
CMD sh -c "cd react-twitter && yarn start"