FROM node:18-alpine as dev

WORKDIR /usr/src/app/ui
COPY client/package*.json ./
RUN npm install
COPY client/ ./

EXPOSE 8080

CMD ["npm", "run", "serve"]

