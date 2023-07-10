FROM node:18-alpine as base

WORKDIR /usr/src/app/api
COPY package.json /
COPY package-lock.json /
EXPOSE 3000

FROM base as dev
ENV NODE_ENV=development
RUN npm install && npm install -g nodemon
COPY .. /
CMD ["npm", "run", "start:dev"]

FROM base as prod
ENV NODE_ENV=production
RUN npm ci && npm install -g pm2
COPY .. /
CMD ["npm", "run", "start:prod"]
