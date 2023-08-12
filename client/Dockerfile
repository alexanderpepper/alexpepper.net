FROM node:18-alpine as dev
WORKDIR /usr/src/app/ui
COPY client/package*.json ./
RUN npm install
EXPOSE 8080
COPY client/ ./
CMD ["npm", "run", "serve"]

