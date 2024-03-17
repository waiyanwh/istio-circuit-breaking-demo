FROM node:10-alpine

COPY . /home/node/app
WORKDIR /home/node/app
RUN npm install express
EXPOSE 8080
CMD [ "node", "app.js" ]
