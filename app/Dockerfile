FROM node:18-alpine as base

FROM base as dev
WORKDIR /usr/src/app/api
COPY package*.json /
RUN npm install && npm install -g nodemon
COPY .. /
EXPOSE 3000
ENV NODE_ENV=development
CMD ["npm", "run", "start:dev"]

FROM base as prod
RUN mkdir -p /home/node/app/node_modules && \
    mkdir -p /home/node/app/client/node_modules && \
    mkdir -p /home/node/app/client/dist && \
    touch /home/node/app/client/dist/index.html && \
    chown -R node:node /home/node/app

WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
RUN npm install

WORKDIR /home/node/app/client
COPY --chown=node:node client/package*.json ./
RUN npm install

USER node
WORKDIR /home/node/app
COPY --chown=node:node . .

WORKDIR /home/node/app/client
RUN npm run build

WORKDIR /home/node/app
EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "run", "start:prod"]
